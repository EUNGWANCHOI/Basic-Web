let addBtn = document.getElementById("add-btn");
let input = document.getElementById("todo-input");
let list = document.getElementById("todo-list");

/* 할 일 추가 함수 **/
const addTodo = () => {
  const todoText = input.value.trim();
  if (todoText === "") return alert("할 일을 입력해주세요!");
  else {
    const todo = document.createElement("li");
    todo.textContent = todoText;
    

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        todo.style.textDecoration = "line-through";
      } else {
        todo.style.textDecoration = "none";
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => todo.remove());
    todo.appendChild(deleteBtn);

    todo.prepend(checkbox);
    list.appendChild(todo);
    input.value = "";

    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

/* 로컬스토리지 저장 **/

addBtn.addEventListener("click", addTodo);
