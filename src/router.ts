import { Request, Response } from "express";
import { Router } from "express";
import { TodoService } from "./service";

const todoRouter = Router();
const todoService = TodoService;

todoRouter.get("/", async (req: Request, res: Response) => {
  const todos = await todoService.getAllTodo();
  res.send(todos);
});

todoRouter.post("/", async (req: Request, res: Response) => {
  const obj = req.body;
  const todo = await todoService.createATodo(obj);
  res.send(todo);
});

todoRouter.get("/findById", async (req: Request, res: Response) => {
  //still need to handle if id is entered but isnt in format that mongo accepts
  const id = req.body._id;
  const todo = await todoService.getTodoById(id);
  res.send(todo);
});

todoRouter.put("/", async (req: Request, res: Response) => {
  const id = req.body._id;
  const data = req.body;
  const todo = await todoService.updateATodo(id, data);
  res.send(todo);
});

todoRouter.delete("/", async (req: Request, res: Response) => {
  //still need to handle if id is entered but isnt in format that mongo accepts
  const id = req.body._id;
  const todo = await todoService.deleteTodo(id);
  res.send(todo);
});

export { todoRouter as TodoRouter };
