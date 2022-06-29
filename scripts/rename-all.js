import fs from "fs";
const rootDirs = ["../docs/02-ot", "../docs/03-nt"];

function renameAll(rootDir) {
    const files = fs.readdirSync(rootDir);
    for (let file of files) {
        let no = file.substring(1, 3);
        let newFile = no + "-" + file;
        fs.renameSync(rootDir + "/" + file, rootDir + "/" + newFile);
    }
}

for (let rootDir of rootDirs) {
    renameAll(rootDir);
}