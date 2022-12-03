import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { Authorize } from "./authorize";
const app = express();
const myFun = (req: Request, res: Response, next: NextFunction): void => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log({
    method,
    url,
    time
  });
  next();
};
// app.use(Authorize);
// app.use(myFun);
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  const { user } = req.query;

  res.send("Home");
});
app.listen(5000, () => {
  console.log("Server is running on 5000");
});
