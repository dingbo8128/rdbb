import fs from "fs";

const  buf = fs.readFileSync("../docs/02-ot/o20.mdx");
const content = buf.toString();
const lines = content.split("\n");
for (let i = 0; i < lines.length; i++) {
     if (lines[i].startsWith("##")) {
        lines[i] = '\n' + lines[i] + '\n';
     }
}

const newContent = lines.join("\n");
fs.writeFileSync("../docs/02-ot/20-proverbs.mdx", newContent);