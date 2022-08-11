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
};

export { todoService as TodoService };
