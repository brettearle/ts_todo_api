import { Request, Response } from "express";
import { Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("im the get route");
});

router.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  res.send(`this is the post`);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.query.id);
  isNaN(id) === false
    ? res.send(`this is the get by id route ${id}`)
    : res.send("not found");
});

export { router };
