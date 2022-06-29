import fs from "fs";

const buf = fs.readFileSync("../docs/02-ot/20-proverbs.mdx");
const content = buf.toString();
const lines = content.split("\n");
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().length === 0) {
        if (lines[i - 1].trim().endsWith("<br/>") && !lines[i-1].startsWith("<br/>")  && lines[i+1] && !lines[i + 1].startsWith("##")) {
            lines[i] = '<br/>'
        }
    }
}

const newContent = lines.join("\n");
fs.writeFileSync("../docs/02-ot/20-proverbs.mdx", newContent);