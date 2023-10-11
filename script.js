let body = document.querySelector("body")


let newDiv = document.createElement("div")
let newDivInside;
let newDivColumn;

let gridInput = 32


// let gridSquareHeight = 800/gridInput;
// let gridSquareWidth = 800/gridInput;



body.appendChild(newDiv)
newDiv.classList.add("board")




for (let i = 0; i < gridInput; i ++){
  
  let columnCount = gridInput

  let newDivInside = document.createElement("div")
  newDiv.appendChild(newDivInside)
  newDivInside.classList.add("inside")

  for (let i = 0; i < columnCount; i ++){
  
    let newDivColumn = document.createElement("div")
    
    newDivInside.appendChild(newDivColumn)
    newDivColumn.classList.add("column")
  
  }

}



let gridSquares = document.querySelector(".inside")


newDiv.style = "border: 1px solid red; height: 800px; width: 800px; background-color: orange; Display: Flex"



