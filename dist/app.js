"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add_function_1 = __importDefault(require("./add_function"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    console.log((0, add_function_1.default)(5, 5));
    res.send("Hello");
});
app.listen(5000, () => console.log("server running port 5000"));
