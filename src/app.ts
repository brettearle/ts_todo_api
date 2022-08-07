import express from "express";
import { Application } from "express";
import { TodoRouter } from "./router";

const app: Application = express();

const todoRouter = TodoRouter;

app.use("/", todoRouter);

app.listen(5000, () => console.log("server running port 5000"));
