let addBtn = document.getElementById("add-btn");
let input = document.getElementById("todo-input");
let list = document.getElementById("todo-list");

const addTodo = () => {
  const todoText = input.value.trim();
  if (todoText === "") return alert("할 일을 입력해주세요!");
  else {
    const todo = document.createElement("li");
    todo.textContent = todoText;
    list.appendChild(todo);
    input.value = "";
  }
};

addBtn.addEventListener("click", addTodo);
