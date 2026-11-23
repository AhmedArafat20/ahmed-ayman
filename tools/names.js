/* Writes img/projects/NAMES.txt : the exact file name to use for each project's image */
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
const { PROJECTS } = new Function(fs.readFileSync(path.join(root, "js/data.js"), "utf8") + ";return {PROJECTS}")();
const rows = PROJECTS.map((p, i) => `${String(i + 1).padStart(2, "0")}  ${(p.slug.toLowerCase() + ".jpg").padEnd(36)}${p.t.en}`);
fs.writeFileSync(path.join(root, "img/projects/NAMES.txt"), "Name each screenshot exactly like this (jpg / png / webp all work):\n\n" + rows.join("\n") + "\n");
console.log("Wrote img/projects/NAMES.txt");
