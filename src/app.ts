import express from "express";
import { Application } from "express";
import { TodoRouter } from "./router";
import "dotenv/config";
import { connectDB } from "./dbConn";

connectDB();
const app: Application = express();

const todoRouter = TodoRouter;

app.use("/", todoRouter);

app.listen(5000, () => console.log("server running port 5000"));
