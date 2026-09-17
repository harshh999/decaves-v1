const fs = require('fs');
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

// Split by top level objects. Each block starts with `{` and ends with `},` or `}`
// A naive split: match all blocks between { and }, using regex or brace counting.

function extractBlocks(text) {
  const blocks = [];
  let depth = 0;
  let currentBlock = "";
  let inString = false;
  let stringChar = '';
  
  // also grab leading comments if any
  let currentComment = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (!inString && text.substring(i, i+2) === '//' && depth === 0) {
      // it's a comment, read to end of line
      let endOfLine = text.indexOf('\n', i);
      if (endOfLine === -1) endOfLine = text.length;
      currentComment += text.substring(i, endOfLine + 1);
      i = endOfLine;
      continue;
    }
    
    // consume whitespace if at depth 0
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
        // block complete
        // check if next char is comma
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

// Build map of title -> block
const blockMap = new Map();
blocks.forEach(b => {
  const titleMatch = b.block.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) {
    let title = titleMatch[1];
    // normalize titles
    if (title === 'The Hanging Pyramids') title = 'Hanging Pyramids';
    if (title === 'The Cottage House') title = 'Cottage House';
    if (title === 'The Walnut Residence') title = 'Walnut Residence';
    if (title === 'The Floating Boxes') title = 'Floating Boxes';
    if (title === 'The Courtyard Estate') title = 'Courtyard Estate';
    if (title === 'The Ivory House') title = 'Ivory House';
    if (title === 'The Skyhigh Retreat') title = 'Skyhigh Retreat';
    if (title === 'Tathastu') title = 'Tathastu, Woods Ville'; // based on order provided
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
  "Ishaanti Group", // Note: user said "Ishaanti"
  "Courtyard Estate",
  "Ivory House",
  "Skyhigh Retreat",
  "Tapas"
];

// Wait, the user said "Ishaanti", but title is "Ishaanti Group".
const titleAlias = {
  "Tathastu, Woods Ville": "Tathastu",
  "Ishaanti": "Ishaanti Group"
};

const newBlocks = [];
for (let req of requiredOrder) {
  let lookup = req;
  if (titleAlias[req]) lookup = titleAlias[req];
  
  if (blockMap.has(lookup)) {
    newBlocks.push(blockMap.get(lookup).fullText);
    blockMap.delete(lookup);
  } else if (blockMap.has(req)) {
    newBlocks.push(blockMap.get(req).fullText);
    blockMap.delete(req);
  } else {
    console.log("Could not find project:", req);
  }
}

// Add any remaining
for (let [title, b] of blockMap.entries()) {
  console.log("Adding remaining:", title);
  newBlocks.push(b.fullText);
}

// remove trailing comma from the very last block
if (newBlocks.length > 0) {
  newBlocks[newBlocks.length - 1] = newBlocks[newBlocks.length - 1].replace(/,\s*$/, '');
}

const newContent = prefix + newBlocks.join('\n') + suffix;
fs.writeFileSync('src/data/projects.ts', newContent);
console.log("Reordered successfully");

