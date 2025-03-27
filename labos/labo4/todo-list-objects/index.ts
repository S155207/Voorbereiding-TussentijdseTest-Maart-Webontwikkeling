import data from "./todos.json"
import * as readline from "readline-sync"

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

const todos: Todo[] = data;
let choices = ["Add a task", "Show tasks", "Check a task", "Exit"];
let choice = readline.keyInSelect(choices, "What would you like to do? ", { cancel: false });
while (choice !== 3) {
    switch (choice) {
        case 0:
            const todo = readline.question("Enter a task: ");
            todos.push({
                id: todos.length +1,
                title: todo,
                completed: false
            });
            break;
        case 1:
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i + 1}. [${todos[i].completed ? "X" : " "}] ${todos[i].title}`);
            };
            break;
        case 2:
            const notCompleted: Todo[] = todos.filter((todo => !todo.completed));
            const index = readline.keyInSelect(notCompleted.map(todo => todo.title), "What did you do?", { cancel: false });
            todos[todos.findIndex(todo => todo.title === notCompleted.map(todo => todo.title)[index])].completed = true;
            break;
    };
    choice = readline.keyInSelect(choices, "What would you like to do? ", { cancel: false });
};