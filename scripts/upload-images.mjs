import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const SRC_DIR = path.resolve(process.cwd(), "src");
const ENV_FILE = path.resolve(process.cwd(), ".env.local");
const CONCURRENCY = 3;
const UPLOAD_LIMIT = 9_800_000;

function loadEnv(file) {
  if (!fs.existsSync(file)) {
    console.error(`Missing env file: ${file}`);
    process.exit(1);
  }
  const env = {};
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2];
  }
  return env;
}

function parseCloudinaryUrl(url) {
  const m = url.match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/);
  if (!m) {
    console.error(`Invalid CLOUDINARY_URL: ${url}`);
    process.exit(1);
  }
  return { apiKey: m[1], apiSecret: m[2], cloudName: m[3] };
}

function toPublicId(localPath) {
  return localPath
    .replace(/\.[A-Za-z0-9]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9/]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[/-]+|[/-]+$/g, "");
}

function walkTsFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkTsFiles(full, out);
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function extractLocalPaths(content) {
  const paths = [];
  const re = /(?:^|[^A-Za-z0-9_])(rootFile|siteImage|cldUrl)\(/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const start = m.index + m[0].length;
    let i = start;
    const quote = content[i];
    if (quote !== '"' && quote !== "'") continue;
    let s = "";
    let j = i + 1;
    while (j < content.length && content[j] !== quote) {
      if (content[j] === "\\") {
        s += content[j + 1];
        j += 2;
        continue;
      }
      s += content[j];
      j++;
    }
    if (s) paths.push(s);
  }
  return paths;
}

function extractCldPaths(tsContent) {
  const paths = [];
  const re = /(?:^|[^A-Za-z0-9_])cld\(/g;
  let m;
  while ((m = re.exec(tsContent)) !== null) {
    let i = m.index + m[0].length;
    const segments = [];
    let depth = 1;
    while (i < tsContent.length) {
      const ch = tsContent[i];
      if (ch === '"') {
        let j = i + 1;
        let s = "";
        while (j < tsContent.length && tsContent[j] !== '"') {
          if (tsContent[j] === "\\") {
            s += tsContent[j + 1];
            j += 2;
            continue;
          }
          s += tsContent[j];
          j++;
        }
        segments.push(s);
        i = j + 1;
        continue;
      }
      if (ch === "(") depth++;
      else if (ch === ")") {
        depth--;
        if (depth === 0) break;
      }
      i++;
    }
    if (segments.length > 0) paths.push(segments.join("/"));
  }
  return paths;
}

function findFile(dir, relPath) {
  const parts = relPath.replace(/^\/+/, "").split("/");
  let current = dir;
  for (const part of parts) {
    let entries;
    try {
      entries = fs.readdirSync(current);
    } catch {
      return null;
    }
    const hit = entries.find((e) => e.toLowerCase() === part.toLowerCase());
    if (!hit) return null;
    current = path.join(current, hit);
  }
  return current;
}

function signParams(params, apiSecret) {
  const sorted = Object.keys(params)
    .sort()
    .map((k) => `${k}=${String(params[k]).replace(/&/g, "%26")}`)
    .join("&");
  return crypto.createHash("sha1").update(sorted + apiSecret).digest("hex");
}

async function prepareFile(file) {
  const size = (await fs.promises.stat(file)).size;
  if (size <= UPLOAD_LIMIT) {
    return { buffer: await fs.promises.readFile(file), resized: false };
  }
  let buf = await sharp(file)
    .rotate()
    .resize(4096, 4096, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  if (buf.length > UPLOAD_LIMIT) {
    buf = await sharp(file)
      .rotate()
      .resize(3072, 3072, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 75, mozjpeg: true })
      .toBuffer();
  }
  return { buffer: buf, resized: true };
}

async function uploadFile({ file, publicId, apiKey, apiSecret, cloudName }) {
  const ts = Math.floor(Date.now() / 1000);
  const params = { timestamp: String(ts), public_id: publicId, overwrite: "true" };
  const signature = signParams(params, apiSecret);

  const { buffer, resized } = await prepareFile(file);
  const fd = new FormData();
  fd.append("file", new Blob([buffer]));
  fd.append("api_key", apiKey);
  fd.append("timestamp", String(ts));
  fd.append("signature", signature);
  fd.append("public_id", publicId);
  fd.append("overwrite", "true");

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: fd,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${res.status} ${JSON.stringify(json)}`);
  return { ...json, resized };
}

async function runPool(tasks, concurrency) {
  const results = [];
  let next = 0;
  async function worker() {
    while (next < tasks.length) {
      const idx = next++;
      results.push({ idx, ...(await tasks[idx]()) });
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, tasks.length) }, worker);
  await Promise.all(workers);
  results.sort((a, b) => a.idx - b.idx);
  return results;
}

async function isAlreadyUploaded(publicId, cloudName) {
  try {
    const res = await fetch(
      `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`,
      { method: "HEAD" }
    );
    return res.status === 200;
  } catch {
    return false;
  }
}

async function main() {
  const force = process.argv.includes("--force");
  const env = loadEnv(ENV_FILE);
  const { apiKey, apiSecret, cloudName } = parseCloudinaryUrl(env.CLOUDINARY_URL);

  const byPublicId = new Map();
  for (const file of walkTsFiles(SRC_DIR)) {
    const content = fs.readFileSync(file, "utf8");
    for (const local of extractLocalPaths(content)) {
      const publicId = toPublicId(local);
      if (!byPublicId.has(publicId)) byPublicId.set(publicId, local);
    }
    for (const local of extractCldPaths(content)) {
      const publicId = toPublicId(local);
      if (!byPublicId.has(publicId)) byPublicId.set(publicId, local);
    }
  }

  const tasks = [...byPublicId.entries()].map(([publicId, local]) => {
    return async () => {
      const file = findFile(PUBLIC_DIR, local);
      if (!file) return { local, publicId, skipped: true, reason: "not found in public/" };
      if (!force && (await isAlreadyUploaded(publicId, cloudName))) {
        return { local, publicId, skipped: true, reason: "already on Cloudinary" };
      }
      try {
        const result = await uploadFile({ file, publicId, apiKey, apiSecret, cloudName });
        return { local, publicId, ok: true, secureUrl: result.secure_url };
      } catch (err) {
        return { local, publicId, ok: false, reason: err.message };
      }
    };
  });

  console.log(`Checking ${tasks.length} image references against cloud "${cloudName}"...`);
  const results = await runPool(tasks, CONCURRENCY);

  const ok = results.filter((r) => r.ok);
  const missing = results.filter((r) => r.skipped && r.reason === "not found in public/");
  const uploaded = results.filter((r) => r.skipped && r.reason === "already on Cloudinary");
  const failed = results.filter((r) => !r.ok && !r.skipped);

  console.log(`\nUploaded: ${ok.length}`);
  for (const r of ok) console.log(`  ${r.publicId}  <-  ${r.local}${r.resized ? "  (resized for upload)" : ""}`);
  console.log(`\nAlready on Cloudinary: ${uploaded.length}`);
  if (missing.length) {
    console.log(`\nSkipped (missing locally): ${missing.length}`);
    for (const r of missing) console.log(`  ${r.local} (${r.reason})`);
  }
  if (failed.length) {
    console.log(`\nFailed: ${failed.length}`);
    for (const r of failed) console.log(`  ${r.local} -> ${r.reason}`);
    process.exitCode = 1;
  }
}

main();