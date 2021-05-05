import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const getUserInput = (displayText: string) => {
  return new Promise<string>((resolve) => {
    readline.question(displayText, resolve);
  });
};

export const closeReadline = () => readline.close();
