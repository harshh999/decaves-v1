import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const QUALITY = 82;
const CONCURRENCY = 4;

const EXT_RE = /\.(jpe?g|png)$/i;

function collectJpgs(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectJpgs(full, out);
    } else if (EXT_RE.test(entry.name)) {
      out.push({ full, out: full.replace(EXT_RE, ".webp") });
    }
  }
  return out;
}

async function main() {
  const tasks = collectJpgs(PUBLIC_DIR);
  console.log(`Converting ${tasks.length} jpg/jpeg/png files to webp...`);

  let next = 0;
  const errors = [];
  const done = [];

  async function worker() {
    while (next < tasks.length) {
      const { full, out } = tasks[next++];
      try {
        await sharp(full).rotate().webp({ quality: QUALITY }).toFile(out);
        fs.rmSync(full);
        done.push(`${full} -> ${out}`);
      } catch (err) {
        errors.push(`${full}: ${err.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  console.log(`\nConverted: ${done.length}`);
  for (const line of done) console.log(`  ${line}`);
  if (errors.length) {
    console.log(`\nFailed: ${errors.length}`);
    for (const line of errors) console.log(`  ${line}`);
    process.exitCode = 1;
  }
}

main();