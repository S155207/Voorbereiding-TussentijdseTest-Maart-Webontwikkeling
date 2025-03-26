import * as readline from "readline-sync"

let playerXTurn = true;
let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];
let winnerFound = false;
while (!winnerFound) {
    console.log(`Player ${playerXTurn ? "X" : "O"} is playing:`);
    printBoard();
    const coordinates = readline.question("Enter coordinates (x,y): ").split(',');
    if (board[parseInt(coordinates[0])][parseInt(coordinates[1])] === " ") {
        board[parseInt(coordinates[0])][parseInt(coordinates[1])] = playerXTurn ? "X" : "O";
        playerXTurn = playerXTurn ? false : true;
        console.log();
    } else {
        console.log("This cell is already taken");
    };
    if (checkWinner() !== "") {
        winnerFound = true;
        console.log(`Player ${checkWinner()} wins!`);
    };
};

function printBoard () {
    const horizontalDivider = "  +-----------+";
    console.log("    0   1   2");
    console.log(horizontalDivider);
    for (let i = 0; i < board.length; i++) {
        let row = `${i} |`;
        for (let j = 0; j < board[i].length; j++) {
            row += ` ${board[i][j]} |`
        };
        console.log(row);
        console.log(horizontalDivider);
    };
};

function checkWinner () {
    // Check row winner
    for (let i = 0; i < board.length; i++) {
        if ((board[i][0] === board[i][1] && board[i][0] === board[i][2]) && board[i][0] !== " ") {
            return `${board[i][0]}`;
        };
    };

    // Check column winner
    for (let i = 0; i < board.length; i++) {
        if ((board[0][i] === board[1][i] && board[0][i] === board[2][i]) && board[0][i] !== " ") {
            return `${board[0][i]}`;
        };
    };

    // check diagonal winner
    if (((board[0][0] === board[1][1] && board[0][0] === board[2][2]) || (board[0][2] === board[1][1] && board[0][0] === board[2][0])) && board[1][1] !== " ") {
        return `${board[1][1]}`;
    };

    return "";
};