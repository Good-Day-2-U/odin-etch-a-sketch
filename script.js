let body = document.querySelector("body");


let newDiv = document.createElement("div");

body.appendChild(newDiv);
newDiv.classList.add("board");


let newDivInside;
let newDivColumn;


let sizeButton = document.querySelector(".sizeButton")

sizeButton.addEventListener("click", sizeClicked)

let boardSize;

function sizeClicked() {
  let boardSize = prompt("Please enter a board size!")
  
  if (boardSize >= 1 && boardSize <= 100 ) {
    gridInput = boardSize
    mkBoard()
  }  
}


let gridInput;


let mkBoard = function makeGameBoard() {

  let parentBoard = document.querySelector(".board")
  parentBoard.innerHTML = ''

  for (let i = 0; i < gridInput; i ++){
    
    let columnCount = gridInput

    let newDivInside = document.createElement("div")
    newDiv.appendChild(newDivInside)
    newDivInside.classList.add("inside")

    for (let i = 0; i < columnCount; i ++){
    
      let newDivColumn = document.createElement("div")
      
      newDivInside.appendChild(newDivColumn)
      newDivColumn.classList.add("column")
      newDivColumn.classList.add("drawn")

      newDivColumn.addEventListener('mouseover', draw);
    }
  };
}


let drawElement = document.querySelector(".column")

function draw(event) {
  const column = event.target;
  column.classList.remove("column");
  console.log('changed');
  console.log(event.target);
};




// let gridSquares = document.querySelector(".inside");



// JS styles

newDiv.style = "border: 1px solid red; height: 800px; width: 800px; background-color: orange; Display: Flex"


