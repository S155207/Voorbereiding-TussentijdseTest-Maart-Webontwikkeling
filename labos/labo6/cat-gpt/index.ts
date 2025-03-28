import * as readlline from "readline-sync"
const slothLog = require('sloth-log');

const repeatWords = function (word: string, times: number, delimiter: string) {
    let meow = (word + delimiter).repeat(times);
    meow = meow.substring(0, meow.length - 1);
    let close = ".";
    if (times > 3) {
        close = "!";
    } else if (times > 6) {
        close = "?";
    };
    meow += close;
    slothLog.log(meow);
};

let input = "a";
while (input !== "") {
    input = readlline.question("> ");
    const word = "Meow";
    const times = Math.ceil(Math.random() * 10);
    const delimiter = " ";
    repeatWords(word, times, delimiter);
}