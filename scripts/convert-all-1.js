import fs from "fs";
const rootDirs = ["../docs/02-ot", "../docs/03-nt"];


function convert(buf) {
    const content = buf.toString();
    const lines = content.split("\n");
    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].trim();
        line = line.replaceAll(/<sup>\d+<\/sup>/g, '');
        if (line.startsWith("##")) {
            if (lines[i - 1] != '') {
                line = '\n' + line;
            }
            if (lines[i + 1].trim() != '' && !lines[i + 1].startsWith('##')) {
                line = '\n' + line + '\n';
            }
        }
        lines[i] = line;
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