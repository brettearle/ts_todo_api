import express from "express";
import { Application, Request, Response } from "express";
import add from "./add_function";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  const addedNum: number = add(5, 5);
  res.send(addedNum.toString());
});

app.post("/", (req: Request, res: Response) => {
  res.send(`this is the post`);
});

app.get("/:id", (req: Request, res: Response) => {
  const id: number = Number(req.query.id);
  req.query.id
    ? res.send(`this is the get by id route ${id}`)
    : res.send("not found");
});

app.listen(5000, () => console.log("server running port 5000"));
