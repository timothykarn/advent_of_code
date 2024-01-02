const input = require("../input.json");

const powerOfSets = [];

const extractor = /(\d+) ([rgb])/g;
for (const entry of input) {
    const powerOfSet = { r: 0, g: 0, b: 0};
    entry.split(";").forEach(set => {
        Array.from(set.matchAll(extractor)).forEach(([_, num, color]) => {
            if (powerOfSet?.[color] < num) powerOfSet[color] = parseInt(num);
        })
    });
    powerOfSets.push(powerOfSet);

}
const answer = powerOfSets.map(({r, g, b}) => r * g * b).reduce((a, b) => a + b);
console.log(answer);