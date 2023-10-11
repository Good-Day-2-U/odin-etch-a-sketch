let body = document.querySelector("body")


let newDiv = document.createElement("div")
let newDivInside;

let gridInput = 16


let gridSquareHeight = 800/gridInput;
let gridSquareWidth = 800/gridInput;



body.appendChild(newDiv)
newDiv.classList.add("board")




for (let i = 0; i < gridInput; i ++){
  
  let newDivInside = document.createElement("div")
  
  newDiv.appendChild(newDivInside)
  newDivInside.classList.add("inside")
  // newDivInside.style = "border: 1px solid red; Flex: 1"
  // newDivInside.setAttribute("background-color", "blue")
  // newDivInside.setAttribute("height:", gridSquareHeight + "px")
  // newDivInside.setAttribute("width:", gridSquareWidth + "px")
}

let gridSquares = document.querySelector(".inside")


newDiv.style = "border: 1px solid red; height: 800px; width: 800px; background-color: orange; Display: Flex"
