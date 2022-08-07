import express from "express";
import { Application } from "express";
import { router } from "./router";

const app: Application = express();

const todoRouter = router;

app.use("/", todoRouter);

app.listen(5000, () => console.log("server running port 5000"));
