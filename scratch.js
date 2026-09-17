const fs = require('fs');

const fileContent = fs.readFileSync('src/data/projects.ts', 'utf8');

// The file exports `projects` array, then has some functions.
// We can use a simple parser or just regex, but since we have full JS, we can extract the objects if we parse the AST, or we can just do regex to split the blocks.

// But wait, the file is purely a TS file with one big array and some imports. Let's see the structure first.
