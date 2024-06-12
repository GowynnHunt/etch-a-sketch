const grid = document.querySelector("#grid-container");
const button = document.querySelector("#prompt");

button.addEventListener("click", buttonHandler);

function buttonHandler(event) {
  event.stopPropagation();
  if (event.target.id !== "prompt") {
    return;
  }

  let userInput;

  while (!userInput || userInput > 100 || userInput < 0) {
    userInput = prompt(
      "Please enter how many squares you want on each side of the grid.\n\n100 is the maximum.\n",
    );
    if (userInput === null || userInput === "") {
      return;
    }
    userInput = Number(userInput);
  }

  clearGrid();
  generateGrid(userInput);
}

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function hoverHandler(event) {
  event.target.style = "background-color: blue";
}

function generateGrid(userInput) {
  for (let index = 0; index < userInput; index++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let index = 0; index < userInput; index++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      square.addEventListener("mouseover", hoverHandler);
      row.appendChild(square);
    }

    grid.appendChild(row);
  }
}

generateGrid(16);
