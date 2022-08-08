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
  res.send(todoService.createATodo());
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

export { todoRouter as TodoRouter };
