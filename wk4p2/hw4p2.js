
function runClock() {
  
    var now = new Date()
    
    var hour = now.getHours() % 12
    var min  = now.getMinutes()
    var sec  = now.getSeconds()
    var ms   = now.getMilliseconds()
    
    var clock = document.querySelector("div.clock")
    var hourHand = clock.querySelector("div.hour")
    var minHand  = clock.querySelector("div.minute")
    var secHand  = clock.querySelector("div.second")
    
    var hourRotation = 30 * hour + (0.5 * min)
    var minRotation = 6 * min + (0.1 * sec)
    var secRotation = 6 * sec + 0.006 * ms
    
    hourHand.style.transform = "rotate(" + hourRotation + "deg)"
    minHand.style.transform = "rotate(" + minRotation + "deg)"
    secHand.style.transform = "rotate(" + secRotation + "deg)"
    
    requestAnimationFrame(runClock)
  }
  
  runClock()


var anythingIWant = document.body;
var isDark = false;

var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode() {  
  if(isDark === true) {
    darkModeButton.textContent = "Dark Mode";
    anythingIWant.style.background = "white";
    anythingIWant.style.color = "black";
    isDark = false;
    console.log("dark mode is off");
    
  } else if(isDark === false) {
    darkModeButton.textContent = "Light Mode";
    anythingIWant.style.background = "black";
    anythingIWant.style.color = "white";
    isDark = true;
    console.log("dark mode is on");
  }
}

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();