import * as readline from "readline-sync"

let tasks: string[] = [];
let completedTasks: string[] = [];
let choices = ["Add a task", "Show tasks", "Check a task", "Exit"];
let choice = readline.keyInSelect(choices, "What would you like to do? ", { cancel: false });
while (choice !== 3) {
    switch (choice) {
        case 0:
            tasks.push(readline.question("Enter a task: "));
            break;
        case 1:
            for (let i = 0; i < tasks.length; i++) {
                if (completedTasks.includes(tasks[i])) {
                    console.log(`${i + 1}. [X] ${tasks[i]}`);
                } else {
                    console.log(`${i + 1}. [ ] ${tasks[i]}`);
                };
            };
            break;
        case 2:
            const notCompleted = tasks.filter((task => !completedTasks.includes(task)));
            const index = readline.keyInSelect(notCompleted, "What did you do?", { cancel: false });
            completedTasks.push(tasks[index]);
            break;
    };
    choice = readline.keyInSelect(choices, "What would you like to do? ", { cancel: false });
};