const form = document.getElementById("add-item-form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h5 span");
const listItems = document.getElementsByClassName("task");
const addInput = document.getElementById("input-add");
const searchInput = document.getElementById("input-search");
const liElements = document.querySelectorAll("li");

const removeTask = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = listItems.length;
};

const onPageLoad = () => {
  taskNumber.textContent = listItems.length;

  for (let i = 0; i < listItems.length; ++i) {
    const removeButton = listItems[i].querySelector("button");
    removeButton.addEventListener("click", removeTask);
  }
};

onPageLoad();

const addTask = (e) => {
  e.preventDefault();
  const newItemName = addInput.value;
  if (newItemName === "") return;
  const task = document.createElement("li");
  task.className = "task";

  const itemNameSpan = document.createElement("span");
  itemNameSpan.innerHTML = newItemName;
  task.appendChild(itemNameSpan);

  const removeButton = document.createElement("button");
  removeButton.classList.add("shopping-button");
  removeButton.classList.add("remove-button");
  removeButton.innerHTML = "X";
  task.appendChild(removeButton);

  ul.appendChild(task);
  addInput.value = "";
  taskNumber.textContent = listItems.length;
  task.querySelector("button").addEventListener("click", removeTask);
};

form.addEventListener("submit", addTask);

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liElements];
  console.log(tasks);
  tasks = tasks.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  console.log(tasks);
  ul.textContent = "";
  tasks.forEach((li) => ul.appendChild(li));
};

searchInput.addEventListener("input", searchTask);
