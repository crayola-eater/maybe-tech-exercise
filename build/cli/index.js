"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeReadline = exports.getUserInput = void 0;
const readline_1 = require("readline");
const readline = readline_1.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const getUserInput = (displayText) => {
    return new Promise((resolve) => {
        readline.question(displayText, resolve);
    });
};
exports.getUserInput = getUserInput;
const closeReadline = () => readline.close();
exports.closeReadline = closeReadline;
