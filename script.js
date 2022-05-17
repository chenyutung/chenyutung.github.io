
var anythingIWant = document.body;
var isDark = false;

var homeimg1 = document.getElementById("homeimg1");
homeimg1.addEventListener("mouseover", changeToDarkMode1);
var homeimg2 = document.getElementById("homeimg2");
homeimg2.addEventListener("mouseover", changeToDarkMode2);
var homeimg3 = document.getElementById("homeimg3");
homeimg3.addEventListener("mouseover", changeToDarkMode3);
var homeimg4 = document.getElementById("homeimg4");
homeimg4.addEventListener("mouseover", changeToDarkMode4);
var homeimg5 = document.getElementById("homeimg5");
homeimg5.addEventListener("mouseover", changeToDarkMode5);


//hover img change background color 
function changeToDarkMode1() {  
  if(isDark === true) {
    anythingIWant.style.background = "black";
    isDark = false;
    // console.log("dark mode is off");
    
  } else if(isDark === false) {
    anythingIWant.style.background = "white";
    isDark = true;
    // console.log("dark mode is on");
  }
}
function changeToDarkMode2() {  
  if(isDark === true) {
    anythingIWant.style.background = "#ECEAD9";
    isDark = false;
   
    
  } else if(isDark === false) {
    anythingIWant.style.background = "white";
    isDark = true;
 
  }
}
function changeToDarkMode3() {  
  if(isDark === true) {
    anythingIWant.style.background = "#FDF6C1";
    isDark = false;
    
  } else if(isDark === false) {
    anythingIWant.style.background = "white";
    isDark = true;

  }
}
function changeToDarkMode4() {  
  if(isDark === true) {
    anythingIWant.style.background = "#56A9C9";
    isDark = false;
    
    
  } else if(isDark === false) {
    anythingIWant.style.background = "white";
    isDark = true;

  }
}
function changeToDarkMode5() {  
  if(isDark === true) {
    anythingIWant.style.background = "#EF9195";
    isDark = false;

    
  } else if(isDark === false) {
    anythingIWant.style.background = "white";
    isDark = true;

  }
}