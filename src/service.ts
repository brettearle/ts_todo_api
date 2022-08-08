import { getDB, MongoObjectID } from "./dbConn";

const todoService = {
  getAllTodo: async function getTodos() {
    const snapshot = await getDB().collection("todo").find().toArray();
    return snapshot;
  },

  getTodoById: async function getTodoById(id: string) {
    const todo = await getDB().collection("todo").findOne(MongoObjectID(id));
    return todo;
  },

  createATodo: () => "created a new todo",
};

export { todoService as TodoService };
