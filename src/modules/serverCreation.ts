import { readFileSync } from "fs";
import http from "http";
export const Server = (): void => {
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      const text = readFileSync("./big.txt", "utf-8");
      return res.end(text);
    }
    if (req.url === "/about") {
      return res.end("this is about");
    }
    return res.end(`<h1>Oops!</h1>`);
  });
  server.listen(5000);
};
Server();
