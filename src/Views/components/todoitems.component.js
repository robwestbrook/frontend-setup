export default todo => /*html*/ `
<li class="list-group-item d-flex justify-content-between align-items-center" id="${todo.id}">
  <input type="checkbox" name="checkbox" ${todo.complete ? `checked` : ``} />
  ${
    todo.complete
      ? `<span class="editable" contentEditable><s>${todo.text}</s></span>`
      : `<span class="editable" contentEditable>${todo.text}</span>`
  }
  <button class="btn btn-danger" id="delete">Delete</button>
</li>
`;
