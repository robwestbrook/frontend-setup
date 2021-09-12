export default () => /*html*/`
<div class="container">
  <h1 class="m-2">Todos</h1>
  <form id="todo-form">
    <div class="row m-2 text-center">
      <div class="col-9">
        <div>
          <input class="form-control" id="todo-input" type="text" placeholder="Add todo" name="todo" />
        </div>
      </div>
      <div class="col-3">
        <button class="btn btn-primary">
          Add Todo
        </button>
      </div>
    </div>
  </form>
  <!-- todo list inserted here -->
  <div id="todo-list-div"></div>
</div>
`;