let body = document.querySelector("body");


let newDiv = document.createElement("div");


let newDivInside;
let newDivColumn;


let gridInput = 42;




body.appendChild(newDiv);
newDiv.classList.add("board");




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


