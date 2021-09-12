export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Bind model data changes with the controller
    // handler method
    this.model.bindTodoListChanged(this.onTodoListChanged);

    // Bind the view event listener methods with the
    // controller handler methods

    // Bind the view's bindAddTodo method to the
    // controller's handleAddTodo method
    this.view.bindAddTodo(this.handleAddTodo);

    // Bind the view's bindDeleteTodo method to the
    // controller's handleDeleteTodo method
    this.view.bindDeleteTodo(this.handleDeleteTodo);

    // Bind the view's bindToggleTodo method to the
    // controller's handleToffleTodo method
    this.view.bindToggleTodo(this.handleToggleTodo);

    // this.view.bindEditTodo(this.handleEditTodo);

    // Display initial todos
    // Pass the todos from the model to the
    // display todos in the view
    this.onTodoListChanged(this.model.todos);
  }

  // Handlers
  
  // Handle Todo List Changes
  // When the todo list changes in the model
  // toggle the view's displayTodos method
  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  // Handle Add Todo
  // When the view triggers an add todo event
  // send the new todo to the model to add to data
  handleAddTodo = todoText => {
    this.model.addTodo(todoText);
  };

  // Handle Edit Todo
  // When the view triggers an edit todo event
  // send the edited todo to the model to edit the data
  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText);
  };

  // Handle Delete Todo
  // When the view triggers a delete todo event
  // send the deleted todo to the model to delete the data
  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  };

  // Handle Toggle Todo
  // When the view triggers a toggle todo event
  // send the toggled todo to the model to toggle the data
  handleToggleTodo = id => {
    this.model.toggleTodo(id);
  };
}
