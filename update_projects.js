const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/projects.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Reorder p1, p2, p3 so they are first in the array.
// The array currently starts with p2, p3, p1.
// Let's just find their blocks and rearrange them.
const p1Match = content.match(/\{\s*slug:\s*"our-project-p1"[\s\S]*?curations:\s*\[\],\s*\}/);
const p2Match = content.match(/\{\s*slug:\s*"our-project-p2"[\s\S]*?curations:\s*\[\],\s*\}/);
const p3Match = content.match(/\{\s*slug:\s*"our-project-p3"[\s\S]*?curations:\s*\[\],\s*\}/);

if (p1Match && p2Match && p3Match) {
  // Remove them from content
  content = content.replace(p1Match[0] + ',', '');
  content = content.replace(p2Match[0] + ',', '');
  content = content.replace(p3Match[0] + ',', '');

  // Insert them back at the beginning of the projects array
  const arrayStart = content.indexOf('export const projects: Project[] = [') + 'export const projects: Project[] = ['.length;
  const newFirstThree = `\n  ${p1Match[0]},\n  ${p2Match[0]},\n  ${p3Match[0]},`;
  content = content.slice(0, arrayStart) + newFirstThree + content.slice(arrayStart);
}

// 2. Update p4: title: "The Skyhigh Retreat", location: "Vadodara"
content = content.replace(
  /slug:\s*"our-project-p4",\s*title:\s*"Project Four",\s*location:\s*"India",/,
  `slug: "our-project-p4",\n    title: "The Skyhigh Retreat",\n    location: "Vadodara",`
);

// 3. Update sama-residence: title: "Shah's Residence", location: "Sama, Vadodara"
content = content.replace(
  /slug:\s*"sama-residence",\s*title:\s*"Sama Residence",\s*location:\s*"India",/,
  `slug: "sama-residence",\n    title: "Shah's Residence",\n    location: "Sama, Vadodara",`
);

// 4. Update unknown: title: "The Grid Residence", location: "Vadodara"
content = content.replace(
  /slug:\s*"unknown",\s*title:\s*"Unknown",\s*location:\s*"India",/,
  `slug: "unknown",\n    title: "The Grid Residence",\n    location: "Vadodara",`
);

// 5. Remove karelibaug (project 08)
const karelibaugMatch = content.match(/\{\s*slug:\s*"karelibaug"[\s\S]*?curations:\s*\[\],\s*\},\s*/);
if (karelibaugMatch) {
  content = content.replace(karelibaugMatch[0], '');
}

// 6. Update kolhapur: title: "The Courtyard Estate", location: "Kolhapur"
// (currently title: "Kolhapur", location: "India")
content = content.replace(
  /slug:\s*"kolhapur",\s*title:\s*"Kolhapur",\s*location:\s*"India",/,
  `slug: "kolhapur",\n    title: "The Courtyard Estate",\n    location: "Kolhapur",`
);

// 7. Update anhaya-store-kolhapur: title: "Anhaya Store", location: "Kolhapur"
// (currently title: "Casa Sutra", location: "Kolhapur, Maharashtra")
content = content.replace(
  /slug:\s*"anhaya-store-kolhapur",\s*title:\s*"Casa Sutra",\s*location:\s*"Kolhapur, Maharashtra",/,
  `slug: "anhaya-store-kolhapur",\n    title: "Anhaya Store, Kolhapur",\n    location: "Kolhapur",`
);

fs.writeFileSync(filePath, content);
console.log("Projects updated.");
