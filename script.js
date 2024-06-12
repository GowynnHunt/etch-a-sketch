const grid = document.querySelector("#grid-container");
const button = document.querySelector("#prompt");

button.addEventListener("click", buttonHandler);
grid.addEventListener("mouseover", hoverHandler);

function getColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

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

function hoverHandler(event) {
  if (event.target.className !== "square") {
    return;
  }
  // console.log(event.target);
  event.target.style.backgroundColor = `${getColor()}`;
  event.target.style.opacity -= 0.1;
}

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function generateGrid(userInput) {
  for (let index = 0; index < userInput; index++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let index = 0; index < userInput; index++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      square.style.opacity = 1;
      row.appendChild(square);
    }

    grid.appendChild(row);
  }
}

generateGrid(16);
