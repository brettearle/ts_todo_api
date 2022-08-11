import { Request, Response } from "express";
import { Router } from "express";
import { TodoService } from "./service";

const todoRouter = Router();
const todoService = TodoService;

todoRouter.get("/", async (req: Request, res: Response) => {
  console.log(await todoService.getAllTodo());
  res.send(todoService.getAllTodo());
});

todoRouter.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  const obj = req.body;
  const todo = await todoService.createATodo(obj);
  console.log(todo);
  res.send(todo);
});

todoRouter.get("/findById", async (req: Request, res: Response) => {
  //still need to handle if id is entered but isnt in format that mongo accepts
  const id = req.query.id?.toString();
  let todo: any;
  id !== undefined
    ? (todo = await todoService.getTodoById(id))
    : (todo = "not found");
  res.send(todo);
});

todoRouter.put("/update", async (req: Request, res: Response) => {
  const id = req.body._id;
  const data = req.body;
  console.log(req.body);
  const todo = await todoService.updateATodo(id, data);
  res.send(todo);
});

export { todoRouter as TodoRouter };
