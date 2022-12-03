import { readFileSync, writeFileSync } from "fs";
export const runMe = (): void => {
  const readMe = readFileSync("./content.txt", "utf-8");

  writeFileSync("./content.txt", "hello", { flag: "a" });
  console.log(readMe);
};
runMe();
