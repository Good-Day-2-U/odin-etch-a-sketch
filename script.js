let body = document.querySelector("body")


let newDiv = document.createElement("div")
let newDivInside;

let gridInput = 16


body.appendChild(newDiv)




for (let i = 0; i < gridInput; i ++){
  
  let newDivInside = document.createElement("div")
  
  newDiv.appendChild(newDivInside)
  newDivInside.classList.add("inside")
}

let gridSquares = document.querySelector(".inside")
