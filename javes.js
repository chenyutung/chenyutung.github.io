
// let navElement = document.querySelector(".nav");

// let headline = document.querySelector("h1")
// headline.classList.add("other");


// navElement.classList.add("special");





let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);