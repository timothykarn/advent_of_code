const input = require("./input.json");


const castToNumber = {
    "zero" : "0",
    "one" : "1",
    "two" : "2",
    "three" : "3",
    "four" : "4",
    "five" : "5",
    "six" : "6",
    "seven" : "7",
    "eight" : "8",
    "nine" : "9",
}

const doubleNumberRegex = /(one|two|three|four|five|six|seven|eight|nine|zero|\d).*(one|two|three|four|five|six|seven|eight|nine|zero|\d)/;
const singleNumberRegex = /(one|two|three|four|five|six|seven|eight|nine|zero|\d)/;
let total = 0;
for (const entry of input) {
    const regex = doubleNumberRegex.test(entry) ? doubleNumberRegex : singleNumberRegex;
    let [_, num1, num2] = regex.exec(entry);
    if (!/\d/.test(num1)) num1 = castToNumber[num1];
    if (!/\d/.test(num2)) num2 = castToNumber[num2];
    if (!num2) num2 = num1;
    total += parseInt(num1 + num2);
}

console.log(total);  //55291
