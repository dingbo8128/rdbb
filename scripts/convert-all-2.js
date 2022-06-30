import fs from "fs";
const rootDirs = ["../docs/02-old-testament", "../docs/03-new-testament"];


function convert(buf) {
    const content = buf.toString();
    const lines = content.split("\n");
    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].trim();
        let m = line.match(/^#{2} [^#]+ (\d+)$/);
        if (m) {
            let no = m[1];
            lines[i] = line + ` {#${no}}`
        }
    }

    return lines.join("\n");
}


function convertAll(rootDir) {
    const files = fs.readdirSync(rootDir);
    for (let file of files) {
        if (file.endsWith("mdx")) {
            const buf = fs.readFileSync(rootDir + "/" + file);
            let newContent = convert(buf);
            fs.writeFileSync(rootDir + "/" + file, newContent);
        }
    }
}

for (let rootDir of rootDirs) {
    convertAll(rootDir);
}