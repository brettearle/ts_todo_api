import express from "express";
import { Application, Request, Response } from "express";
import add from "./add_function";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  const addedNum: number = add(5, 5);
  res.send(addedNum.toString());
});

app.listen(5000, () => console.log("server running port 5000"));
