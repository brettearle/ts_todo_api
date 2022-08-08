import "dotenv/config";
import express from "express";
import { Application } from "express";
import { TodoRouter } from "./router";
import { connectDB } from "./dbConn";

connectDB();

const app: Application = express();

const todoRouter = TodoRouter;

app.use("/todo", todoRouter);

app.listen(5000, () => console.log("server running port 5000"));
