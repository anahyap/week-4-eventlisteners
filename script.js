// console.log("This is connected!! Hey CCL!")

// const userComment = "<img src="x" onError=\alert("You have been hacked!")\">"

// document.querySelector(".intro").innerHTML = userComment

// const newListItem = "<li class="item">Watermelons</li>"

// document.querySelector(".intro").innerHTML += newListItem

// in #container build a card about myself

// <div> with class card
// const card = document.createElement("div");
// card.classList.add("card");

// // add h3 with name
// const title = document.createElement("h3");
// title.textContent = "Anahya P.";

// // <p> with fav food
// const paragraph = document.createElement("p");
// paragraph.textContent = "Shrimp Scampi";

// // <img> using url and use .setAttribute or img.src for source
// const image = document.createElement("img");
// image.src = "https://cdn.theatlantic.com/thumbor/Kto-jp-IrA7TydSu5W5uB1FBDmA=/0x131:2555x1568/1952x1098/media/img/mt/2017/06/shutterstock_319985324/original.jpg";

// // append all 3 to card in single append() call, then append to #container
// card.append(title, paragraph, image);

// document.querySelector("#container").append(card);

// Build a To-Do App (add it to your existing index.html and script.js)

// HTML: add a form with a text input and an "Add" button, an empty <ul id="todoList">, and a <p id="todoError">
// for error messages. No hardcoded <li>

// Level 1: Data + Render

// Create a todos array with 2 starting to-dos. Each to-do is an object: { text: "Buy groceries", completed: false }
// Write a renderTodos() function that clears the list and draws one <li> for each to-do
// Call renderTodos() at the bottom of your file so the starting to-dos show up

// Level 2: Add to-dos
//  4. When the form is submitted, use preventDefault, push a new to-do object into the array, call renderTodos(),
// and reset the form
//  5. If the input is empty, show "Please enter a to-do" in #todoError and stop. Clear the error when the input is valid.

// Level 3: Completed state
//  6. If a to-do's completed is true, add a completed class to its <li> inside renderTodos() (style it with a
// strikethrough in CSS)
//  7. Show "X items left" on the page using filter or reduce. Update it inside renderTodos().

// Bonus: clicking a to-do toggles its completed value, then re-renders.
// The rule: never add or change an <li> directly. Change the array, then call renderTodos().\

// create todos array
const toDos = [
  { text: "Record today's income", completed: false },
  { text: "Order dinner", completed: true },
  { text: "Sleep on time", completed: false },
];

const toDoForm = document.querySelector("#toDoForm");
const todoList = document.querySelector("#todoList");
const toDoInput = document.querySelector("#toDoInput");
const toDoError = document.querySelector("#toDoError");
const itemsLeft = document.querySelector("#itemsLeft");

function renderTodos() {
  todoList.innerHTML = "";

  toDos.forEach((todo) => {
    const toDoElement = document.createElement("li");

    toDoElement.textContent = todo.text;

    if (todo.completed === true) {
      toDoElement.classList.add("completed");
    }

    todoList.append(toDoElement);
  });

  const incompleteTodos = toDos.filter((todo) => todo.completed === false);

  itemsLeft.textContent = `${incompleteTodos.length} items left`;
}

toDoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = toDoInput.value;

  if (inputValue === "") {
    toDoError.textContent = "Please enter a to-do";
    return;
  }

  toDoError.textContent = "";

  const newToDo = {
    text: inputValue,
    completed: false,
  };

  toDos.push(newToDo);

  renderTodos();

  toDoForm.reset();
});

renderTodos();

// call rendertodos
// console.log(renderToDos);
