const fs = require('fs');

const shahsResidenceBlock = `
  {
    slug: "sama-residence",
    title: "Shah's Residence",
    location: "Sama, Vadodara",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789583519/Screenshot_2026-09-16_at_11.59.57_PM_lnoje5.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583526/Screenshot_2026-09-16_at_11.59.08_PM_nxakyf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583525/Screenshot_2026-09-16_at_11.59.43_PM_nfhbxz.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583521/Screenshot_2026-09-16_at_11.59.22_PM_za2hzz.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583522/Screenshot_2026-09-16_at_11.59.02_PM_xrmf5o.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583519/Screenshot_2026-09-16_at_11.59.57_PM_lnoje5.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583516/Screenshot_2026-09-16_at_11.58.55_PM_qhkdei.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583516/Screenshot_2026-09-16_at_11.59.38_PM_mbjoxh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583515/Screenshot_2026-09-16_at_11.58.19_PM_dsptik.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583513/Screenshot_2026-09-16_at_11.59.14_PM_nqbnof.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583512/Screenshot_2026-09-16_at_11.58.26_PM_mwhqrd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583506/Screenshot_2026-09-16_at_11.58.49_PM_rvbn6z.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583506/Screenshot_2026-09-16_at_11.58.40_PM_k8shji.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583505/Screenshot_2026-09-16_at_11.57.59_PM_rwgbxh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583503/Screenshot_2026-09-16_at_11.58.09_PM_xr6ft9.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583501/Screenshot_2026-09-16_at_11.58.32_PM_jvodus.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583497/Screenshot_2026-09-17_at_12.00.18_AM_mqbtad.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583479/Screenshot_2026-09-17_at_12.00.04_AM_l7aax0.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583479/Screenshot_2026-09-17_at_12.00.12_AM_vicyws.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623062/Screenshot_2026-09-17_at_11.00.46_AM_lnzzhv.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623073/Screenshot_2026-09-17_at_11.00.59_AM_x3hixd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623076/Screenshot_2026-09-17_at_11.01.11_AM_tppjzw.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623100/Screenshot_2026-09-17_at_11.01.28_AM_cb8nxl.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623103/Screenshot_2026-09-17_at_11.01.38_AM_auqch3.png"
    ],
    curations: [],
    isPlaceholder: false,
  }`;


const content = fs.readFileSync('src/data/projects.ts', 'utf8');

const prefixMatch = content.match(/^(.*?)export const projects: Project\[\] = \[\s*/s);
const suffixMatch = content.match(/(\n\];\n.*)$/s);

if (!prefixMatch || !suffixMatch) {
  console.log("Could not find boundaries");
  process.exit(1);
}

const prefix = prefixMatch[1] + 'export const projects: Project[] = [\n';
const suffix = suffixMatch[1];

let arrayContent = content.substring(prefixMatch[0].length, content.length - suffixMatch[0].length);

function extractBlocks(text) {
  const blocks = [];
  let depth = 0;
  let currentBlock = "";
  let inString = false;
  let stringChar = '';
  let currentComment = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (!inString && text.substring(i, i+2) === '//' && depth === 0) {
      let endOfLine = text.indexOf('\n', i);
      if (endOfLine === -1) endOfLine = text.length;
      currentComment += text.substring(i, endOfLine + 1);
      i = endOfLine;
      continue;
    }
    
    if (depth === 0 && char.trim() === '') {
      currentComment += char;
      continue;
    }
    
    if (char === '"' || char === "'" || char === "`") {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (stringChar === char && text[i-1] !== '\\') {
        inString = false;
      }
    }
    
    if (!inString) {
      if (char === '{') {
        depth++;
      } else if (char === '}') {
        depth--;
      }
    }
    
    if (depth > 0 || char === '}') {
      currentBlock += char;
      if (depth === 0) {
        let endIdx = i + 1;
        while (endIdx < text.length && text[endIdx] !== ',' && text[endIdx].trim() === '') {
          endIdx++;
        }
        if (endIdx < text.length && text[endIdx] === ',') {
           currentBlock += ',';
           i = endIdx;
        }
        blocks.push({
          fullText: currentComment + currentBlock,
          block: currentBlock
        });
        currentComment = "";
        currentBlock = "";
      }
    }
  }
  return blocks;
}

const blocks = extractBlocks(arrayContent);
const blockMap = new Map();

blocks.push({ fullText: shahsResidenceBlock + ',', block: shahsResidenceBlock });

blocks.forEach(b => {
  // Use a better regex to extract the exact string inside double quotes
  const titleMatch = b.block.match(/title:\s*"([^"]+)"/);
  if (titleMatch) {
    let title = titleMatch[1];
    
    // Normalize aliases based on required order or actual source data
    if (title === 'The Hanging Pyramids') title = 'Hanging Pyramids';
    if (title === 'The Cottage House') title = 'Cottage House';
    if (title === 'The Walnut Residence') title = 'Walnut Residence';
    if (title === 'The Floating Boxes') title = 'Floating Boxes';
    if (title === 'The Courtyard Estate') title = 'Courtyard Estate';
    if (title === 'The Ivory House') title = 'Ivory House';
    if (title === 'The Skyhigh Retreat') title = 'Skyhigh Retreat';
    if (title === 'Tathastu') title = 'Tathastu, Woods Ville'; 
    if (title === 'Ishaanti Group') title = 'Ishaanti';
    
    blockMap.set(title, b);
  } else {
    console.log("No title found in block", b.block.substring(0, 50));
  }
});

const requiredOrder = [
  "Tathastu, Woods Ville",
  "Hanging Pyramids",
  "Cafe Lemon",
  "Cottage House",
  "Villa Hacienda",
  "Resort Halol",
  "Saanidhya Greens",
  "Shah's Residence",
  "Shah's Dream Home",
  "Bhoiwala's Residence",
  "The Grid Residence",
  "Anhaya Store",
  "Walnut Residence",
  "Floating Boxes",
  "Ishaanti", 
  "Courtyard Estate",
  "Ivory House",
  "Skyhigh Retreat",
  "Tapas"
];


const newBlocks = [];
for (let req of requiredOrder) {
  if (blockMap.has(req)) {
    newBlocks.push(blockMap.get(req).fullText);
    blockMap.delete(req);
  } else {
    console.log("Could not find project:", req);
  }
}

for (let [title, b] of blockMap.entries()) {
  console.log("Adding remaining:", title);
  newBlocks.push(b.fullText);
}

if (newBlocks.length > 0) {
  newBlocks[newBlocks.length - 1] = newBlocks[newBlocks.length - 1].replace(/,\s*$/, '');
}

const newContent = prefix + newBlocks.join('\n') + suffix;
fs.writeFileSync('src/data/projects.ts', newContent);
console.log("Reordered correctly.");
