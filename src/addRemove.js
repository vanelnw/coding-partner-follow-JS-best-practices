function displayTaks(id, todo, checked) {
  const list = document.getElementById("list");
  const done = checked ? "done" : "";
  const item = `
  <li class="item ${done}" id="item">       
              <input type="checkbox" id=${id} name="checkbox" ${checked}/>
              <input type="text" id="Todo" value=${todo} name="todo" readonly/>
            <i class="fa-solid fa-ellipsis-vertical" id=${id} name="update"></i>
          </li>
  `;
  list.insertAdjacentHTML("beforeend", item);
}

export function addTodo(TodoList, todo, id, status = false) {
  const checked = status ? "checked" : "";

  displayTaks(id, todo, checked);

  TodoList.push({
    index: id,
    description: todo,
    completed: false,
  });

  localStorage.setItem("todos", JSON.stringify(TodoList));
}

export function removeTodo(MyTodos, element) {
  const cuurId = parseInt(element.id, 10);

  MyTodos.TodoList = MyTodos.TodoList.filter((todo) => todo.index !== cuurId);

  for (let i = cuurId; i < MyTodos.TodoList.length; i += 1) {
    TodoList[i].index -= 1;
  }
  element.parentNode.parentNode.replaceChildren("");
  MyTodos.renderTodos();
  localStorage.setItem("todos", JSON.stringify(MyTodos.TodoList));
}
