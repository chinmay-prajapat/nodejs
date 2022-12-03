// import axios from "axios";
// import { http } from 'http';
// export const prom = new Promise((resolve, reject) => {
//   const i = 1 + 1;
//   if (i === 2) {
//     resolve("resolved");
//   } else {
//     reject(new Error("rejected"));
//   }
// });

// const runMe = async (): Promise<void> => {
//   const printMe = await prom;
//   console.log("async", printMe);
// };

// console.log("start");
// prom.then((res) => console.log(res)).catch((err) => console.log(err));
// try {
//   runMe();
// } catch (er) {}
// console.log("end");

// const myApiCall = (
//   callbacks: (args: unknown) => void,
//   errorCallback: (args: Error) => void
// ): void => {
//   const i = 1 + 3;

//   if (i === 4) {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos/1")
//       .then((data) => {
//         callbacks(data.data);
//       })
//       .catch((er) => console.log(er));
//   } else {
//     errorCallback(new Error("not equal"));
//   }
// };

// myApiCall(
//   (fun1) => {
//     return console.log("called", fun1);
//   },

//   (fun2) => console.log(fun2)
// );

// const PromiseFunction = (): any => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos/8000")
//       .then((data) => resolve(data.data))
//       .catch((er) => reject(er));
//   });
// };

// PromiseFunction()
//   .then((data: any) => console.log("data", data))
//   .catch((err: any) => console.log(err));

// console.log("synchronous1");
// setTimeout((_) => console.log("Timeout 2"), 0);
// Promise.resolve()
//   .then((_) => console.log("Promise"))
//   .catch((err) => console.log(err));
// console.log("synchronous 4");

// setInterval(() => {
//   console.log("Hello world");
// }, 2000);
// console.log("I will run first");
import http from "http";
import { readFileSync } from "fs";
const myFile = readFileSync("./content.txt");
const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(myFile);
  } else {
    res.writeHead(404, { "content-type": "text/html" });

    res.write("<h1>Page Not Found!</h1>");
  }
  res.end();
});
server.listen(5000);
