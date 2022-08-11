import { getDB, MongoObjectID } from "./dbConn";

type Todo = {
  title: string;
  completed: boolean;
};

const todoService = {
  getAllTodo: async function getTodos() {
    const snapshot = await getDB().collection("todo").find().toArray();
    return snapshot;
  },

  getTodoById: async function getTodoById(id: string) {
    const todo = await getDB().collection("todo").findOne(MongoObjectID(id));
    return todo;
  },

  createATodo: async function createATodo(obj: Todo) {
    const todo = obj;
    await getDB().collection("todo").insertOne(todo);
    return todo;
  },

  updateATodo: async function updateTodo(id: string, data: Todo) {
    const idMongo = MongoObjectID(id);
    const todo = await getDB()
      .collection("todo")
      .findOneAndUpdate(
        { _id: idMongo },
        { $set: { title: data.title, completed: data.completed } },
        { upsert: true, returnDocument: "after" }
      );
    return todo.value;
  },

  deleteTodo: async function deleteTodoById(id: string) {
    const todo = await getDB()
      .collection("todo")
      .deleteOne({ _id: MongoObjectID(id) });
    return todo;
  },
};

export { todoService as TodoService };
