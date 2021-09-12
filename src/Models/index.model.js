import data from "./data";

export default class Model {
  constructor() {
    // The state of the model
    // An array of todo objects
    this.todos = data;
  }

  // Bind Changes in the Model to the Controller
  // Controller passes changes to View, ehich updates
  // the display
  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  // Add Todo
  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };
    this.todos.push(todo);
    // Signals the view, via controller, to update display
    this.onTodoListChanged(this.todos);
  }
  // Edit Todo
  // Map through all todos and replace the text of the todo
  // with the specified id
  editTodo(id, updatedText) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? { id: todo.id, text: updatedText, complete: todo.complete }
        : todo
    );
    // Signals the view, via controller, to update display
    this.onTodoListChanged(this.todos);
  }
  // Delete Todo
  // Filter a todo out of the array by id
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    // Signals the view, via controller, to update display
    this.onTodoListChanged(this.todos);
  }

  // Toggle Todo
  // Flip the complete boolean on the specified todo
  toggleTodo(id) {
    this.todos = this.todos.map((todo) => 
      todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
    );
    // Signals the view, via controller, to update display
    this.onTodoListChanged(this.todos);
  }
}
