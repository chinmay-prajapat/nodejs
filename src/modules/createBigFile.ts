import { writeFileSync } from "fs";
const BigFile = (): void => {
  for (let i = 0; i < 10000; i++) {
    writeFileSync("big.txt", `hello world ${i}\n`, { flag: "a" });
  }
};

BigFile();
export default BigFile;
