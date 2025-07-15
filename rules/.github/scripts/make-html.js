// Concatenate every Markdown file under /rules → index.html
import fs from "node:fs";
import path from "node:path";
import MarkdownIt from "markdown-it";

const dir = "rules";
const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

const files = fs.readdirSync(dir)
  .filter(f => f.endsWith(".md"))
  .sort();                          // relies on 01-, 02- naming

let combined = "";
for (const f of files) {
  combined += "\n\n" + fs.readFileSync(path.join(dir, f), "utf8");
  combined += "\n\n<div class=\"page-break\"></div>\n\n";
}

const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<title>Ubyx Stablecoin Clearing‑House Rulebook</title>
<style>
 body{font:400 16px/1.6 "Helvetica Neue",Arial,sans-serif;
      max-width:780px;margin:2rem auto;padding:0 1rem;color:#111;}
 h1,h2,h3{margin-top:2.2em} h1{font-size:2rem}
 .page-break{page-break-after:always;height:0}
 @media print{a[href]:after{content:""}}
</style></head><body>
${md.render(combined)}
</body></html>`;
fs.writeFileSync("index.html", html);
console.log("✓ Built docs to index.html");
