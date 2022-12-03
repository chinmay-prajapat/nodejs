import { readFile, writeFile } from "fs";
const getText = async (path: string): Promise<string> => {
  return await new Promise<string>((resolve, reject: (err: Error) => void) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
readFile("./content.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

writeFile("./content.txt", "heyscsdsdsdsdfd", { flag: "a" }, (err) => {
  return err;
});
