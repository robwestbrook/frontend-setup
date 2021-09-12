import NavBar from "./components/navbar.component";
import HomePage from "./components/homepage.component";
import TodoList from "./components/todolist.component";
import TodoItems from "./components/todoitems.component";
import getElement from "./helpers/getElement";

export default class View {
  constructor() {
    this.app = getElement("#app");
    this.NavBar = NavBar();
    this.HomePage = HomePage();
    this.TodoList = TodoList();
    this.app.innerHTML = this.NavBar + this.HomePage;
  }

  get _todoText() {
    return document.getElementById('todo-input').value;
  }

  _resetInput() {
    document.getElementById('todo-input').value = "";
  }

  async displayTodos(todos) {
    // Get the todo list div
    let todoListDiv = document.querySelector("#todo-list-div");

    // Add the <ul> to the todo list div
    todoListDiv.innerHTML = this.TodoList;

    // Get the <ul>
    let todoList = document.querySelector("#todo-list");

    // Show default message
    if (todos.length === 0) {
      todoList.innerHTML = "<p>Nothing to do. Add a task?</p>"
    } else {
      todos.forEach(todo => {
        let li = TodoItems(todo);
        todoList.innerHTML = todoList.innerHTML + li;
      });
    }
  }

  // Event Listeners

  // Bind Add Todo Button
  // Listener on todo submit button
  bindAddTodo(handler) {
    let todoForm = document.querySelector("#todo-form");
    todoForm.addEventListener("submit", event => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  // Bind Delete Todo Button
  bindDeleteTodo(handler) {
    let click = document.querySelector("#app");
    click.addEventListener("click", event => {
      if (event.target.id === 'delete') {
        handler(parseInt(event.target.parentElement.id))
      }
    });
  }

  // Bind Checkbox Toggle
  bindToggleTodo(handler) {
    let click = document.querySelector("#app");
    click.addEventListener("click", event => {
      if (event.path[0].type === 'checkbox') {
        handler(parseInt(event.target.parentElement.id));
      }
    });
  }
}
