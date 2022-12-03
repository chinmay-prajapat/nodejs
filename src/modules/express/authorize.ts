import { NextFunction, Request, Response } from "express";

export const Authorize = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let { user }: any = req.query;

  if (user === "chinmay") {
    user = { name: "chinmay", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }

  console.log("Authorize");
  next();
};
