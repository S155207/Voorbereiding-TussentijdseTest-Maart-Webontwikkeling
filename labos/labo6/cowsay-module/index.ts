import * as readline from "readline-sync"
import cowsay from "cowsay"

const say = function (sound: string) {
    if (sound === "Meow!") {
        throw new Error("Cows don't say that!");
    };
    console.log(cowsay.say({ text: `${sound}` }));
};

let sound = "";
while (sound !== "exit") {
    sound = readline.question("What should the cow say?");
    try {
        say(sound);
    } catch (error: any) {
        console.error(error.message);
    };
}