
var anythingIWant = document.body;
var isDark = false;

var homeimg1 = document.getElementById("homeimg1");
homeimg1.addEventListener("click", changeToDarkMode);

function changeToDarkMode() {  
  if(homeimg1 === true) {
    anythingIWant.style.color = "black";
    isDark = false;
    console.log("dark mode is off");
    
  } else if(isDark === false) {
    anythingIWant.style.color = "white";
    isDark = true;
    console.log("dark mode is on");
  }
}
