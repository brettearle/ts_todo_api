import { Request, Response } from "express";
import { Router } from "express";
import { TodoService } from "./service";

const todoRouter = Router();
const todoService = TodoService;

todoRouter.get("/", async (req: Request, res: Response) => {
  res.send(todoService.getAllTodo());
});

todoRouter.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  res.send(todoService.createATodo());
});

todoRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.query.id);
  isNaN(id) === false
    ? res.send(todoService.getTodoById(id))
    : res.send("not found");
});

export { todoRouter as TodoRouter };
