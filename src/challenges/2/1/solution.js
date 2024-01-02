const input = require("../input.json");

const solution = {
    r: 12,
    g: 13,
    b: 14
}
let count= 0;
const extractor = /(\d+) ([rgb])/g;
for (const entry of input) {
    let check = true;
    entry.split(";").forEach(set => {
        Array.from(set.matchAll(extractor)).forEach(([_, num, color]) => {
            if (num > solution[color]) check = false;
        })
    });
    if (check) count += input.indexOf(entry) + 1;
}
console.log(count)