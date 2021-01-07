let grid = document.querySelector("#grid-container");
let div = document.createElement("div");
// creat grid after button is pushed
function creatGrid() {
    let userInput = prompt("Enter a grid width: ");
    while (userInput > 100) {
      userInput = prompt("Enter a grid a number between 1-100: ");
    }
    let unitNumber = userInput*userInput;

    grid.innerText = "";
    for(let i = 0; i < unitNumber; i++) {
      div = document.createElement("div");
      div.classList = "unit";
      grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
}

// creat the starter 16*16 grid 
for (let i = 0; i < 256; i++) {
  div = document.createElement("div");
  div.className = "unit";
  grid.appendChild(div);
}

function blackHover() {
  grid.addEventListener("mouseover", black);
}

function black(e) {
  e.target.style.backgroundColor = "black";
}

function colorHover() {
  grid.addEventListener("mouseover", colors);
}
function colors(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}
//  clear the new grid
function reset(e) {
  creatGrid();
}
// colors button
document.querySelector(".color-button").addEventListener("click", colorHover);
// // blackbutton
document.querySelector(".black-button").addEventListener("click", blackHover);
// reset button
document.querySelector(".reset-button").addEventListener("click", reset);