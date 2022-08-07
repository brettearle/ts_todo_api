import { Request, Response } from "express";
import { Router } from "express";

const todoRouter = Router();

todoRouter.get("/", async (req: Request, res: Response) => {
  res.send("im the get route");
});

todoRouter.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  res.send(`this is the post`);
});

todoRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.query.id);
  isNaN(id) === false
    ? res.send(`this is the get by id route ${id}`)
    : res.send("not found");
});

export { todoRouter as TodoRouter };
