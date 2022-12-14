document.querySelector("form").addEventListener("submit", handleSubmitForm);
document.querySelector("ul").addEventListener("click", handleClickDeleteOrCheck);
document.querySelector(".clearAll").addEventListener("click", clearAll);

const todoArr = [];
let num = 0;
const numberDone = document.querySelector(".numberDone");

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  let p = document.querySelector(".warning");
 
  if (input.value != "") {addTodo(input.value);
  input.value = "";
  p.innerHTML = "";
  p.classList.remove("warning-animate")
} else {
    p.innerHTML = "Input must not be empty";
    p.classList.add("warning-animate");
  }
}

function handleClickDeleteOrCheck(e) {
  if (e.target.className == "todo-item") checkTodo(e);

  if (e.target.name == "deleteButton") deleteTodo(e);
}

function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = ` 
        <span class="todo-item">${todo}</span>
        <button name="deleteButton" class="deleteBtn">🗑️</button>
        `;
  ul.appendChild(li);

  const todoObject = {};
  todoObject.todo = todo;
  todoArr.push(todoObject);
}

function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.className == "") {
    item.className = "line";
    addNumberOfTask();
  } else {
    item.className = "";
    takeAwayTask();
  }
}

function addNumberOfTask() {
  num++;
  numberDone.innerHTML = num;
}

function takeAwayTask() {
  num--;
  numberDone.innerHTML = num;
}

function deleteTodo(e) {
  let item = e.target.parentNode;
  item.remove();
}

function clearAll() {
    num = 0;
    numberDone.innerHTML = num;
    let ul = document.querySelector(".todo-list");
    ul.innerHTML = "";
}






//Old function
// function checkTodo(e) {
//   let item = e.target.parentNode;
//   if (item.style.textDecoration == "line-through") {
//     item.style.textDecoration = "none";
//     takeAwayTask();
//   } else {
//     item.style.textDecoration = "line-through";
//     addNumberOfTask();
//   }
// }


