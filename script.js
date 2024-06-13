const elemBody = document.querySelector("body");
const elemGrid = document.querySelector("#grid-container");
const elemPrompt = document.querySelector("#prompt");
const elemRainbow = document.querySelector("#rainbow-button");
const elemOpacity = document.querySelector("#opacity-button");

let rainbow = false;
let opacity = false;

elemGrid.addEventListener("mouseover", hoverHandler);
elemPrompt.addEventListener("click", promptHandler);
elemRainbow.addEventListener("click", rainbowHandler);
elemOpacity.addEventListener("click", opacityHandler);

function getColor() {
  if (rainbow) {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else {
    return "black";
  }
}

function promptHandler(event) {
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

function rainbowHandler(event) {
  event.stopPropagation();
  if (event.target.id !== "rainbow-button") {
    return;
  }

  elemBody.classList.toggle("rainbow-box");
  elemGrid.classList.toggle("shadow-box");
  if (!rainbow) {
    rainbow = true;
  } else {
    rainbow = false;
  }
}

function opacityHandler(event) {
  event.stopPropagation();
  if (event.target.id !== "opacity-button") {
    return;
  }

  if (!opacity) {
    opacity = true;
  } else {
    opacity = false;
  }
}

function hoverHandler(event) {
  if (event.target.className !== "square") {
    return;
  }
  event.target.style.backgroundColor = `${getColor()}`;
  if (opacity) {
    event.target.style.opacity -= 0.1;
  }
}

function clearGrid() {
  while (elemGrid.firstChild) {
    elemGrid.removeChild(elemGrid.firstChild);
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

    elemGrid.appendChild(row);
  }
}

generateGrid(16);
