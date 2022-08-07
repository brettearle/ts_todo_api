"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add_function_1 = __importDefault(require("./add_function"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    const addedNum = (0, add_function_1.default)(5, 5);
    res.send(addedNum.toString());
});
app.post("/", (req, res) => {
    res.send(`this is the post`);
});
app.get("/:id", (req, res) => {
    const id = Number(req.query.id);
    req.query.id
        ? res.send(`this is the get by id route ${id}`)
        : res.send("not found");
});
app.listen(5000, () => console.log("server running port 5000"));
