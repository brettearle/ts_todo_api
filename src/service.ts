const todoService = {
  getAllTodo: () => "got all the todos",

  getTodoById: (id: number) => `got a todo by id with ${id}`,

  createATodo: () => "created a new todo",
};

export { todoService as TodoService };
