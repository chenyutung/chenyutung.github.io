function myFunction() {
    var x = document.getElementById("color1").value;
    document.getElementById("changecolor").innerHTML = x;

    var y = document.getElementById("month1").value;
    document.getElementById("shape").innerHTML = y;

    var z = document.getElementById("day1").value;
    document.getElementById("lines").innerHTML = z;
  }

 
 function colors() {
    var colorr = document.getElementById("color1").value;
    if(colorr==''){
     document.getElementById("changecolor").style.color = "black";
     
    }
   //  else if(colorr<2000){
   //   document.getElementById("bgCanvas").style.backgroundColor = "#88CCD1";
   //  }
   //  else if(colorr>2000){
   //   document.getElementById("bgCanvas").style.backgroundColor = "#FEF987";
   //  }
    else if(colorr==2000){
       document.getElementById("bgCanvas").style.backgroundColor = "#9bb7d4";
    }
    else if(colorr==2001){
      document.getElementById("bgCanvas").style.backgroundColor = "#c74375";
   }
   else if(colorr==2002){
      document.getElementById("bgCanvas").style.backgroundColor = "#bf1932";
   }
   else if(colorr==2003){
      document.getElementById("bgCanvas").style.backgroundColor = "#7bc4c4";
   }
   else if(colorr==2004){
      document.getElementById("bgCanvas").style.backgroundColor = "#e2583e";
   }
   else if(colorr==2005){
      document.getElementById("bgCanvas").style.backgroundColor = "#53b0ae";
   }
   else if(colorr==2006){
      document.getElementById("bgCanvas").style.backgroundColor = "#DECDBE";
   }
   else if(colorr==2007){
      document.getElementById("bgCanvas").style.backgroundColor = "#9b1b30";
   }
   else if(colorr==2008){
      document.getElementById("bgCanvas").style.backgroundColor = "#9b1b30";
   }
   else if(colorr==2009){
      document.getElementById("bgCanvas").style.backgroundColor = "#f0c05a";
   }


   else if(colorr==2010){
      document.getElementById("bgCanvas").style.backgroundColor = "#45b5aa";
   }
   else if(colorr==2011){
     document.getElementById("bgCanvas").style.backgroundColor = "#D94F70";
  }
  else if(colorr==2012){
     document.getElementById("bgCanvas").style.backgroundColor = "#dd4124";
  }
  else if(colorr==2013){
     document.getElementById("bgCanvas").style.backgroundColor = "#00997b";
  }
  else if(colorr==2014){
     document.getElementById("bgCanvas").style.backgroundColor = "#ad5e99";
  }
  else if(colorr==2015){
     document.getElementById("bgCanvas").style.backgroundColor = "#955251";
  }
  else if(colorr==2016){
     document.getElementById("bgCanvas").style.backgroundColor = "#f7caca";
  }
  else if(colorr==2017){
     document.getElementById("bgCanvas").style.backgroundColor = "#88b04b";
  }
  else if(colorr==2018){
     document.getElementById("bgCanvas").style.backgroundColor = "#5f4b8b";
  }
  else if(colorr==2019){
     document.getElementById("bgCanvas").style.backgroundColor = "#ff6f61";
  }
  else if(colorr==2020){
   document.getElementById("bgCanvas").style.backgroundColor = "#0f4c81";
}
else if(colorr==2021){
   document.getElementById("bgCanvas").style.backgroundColor = "yellow";
}
else if(colorr==2022){
   document.getElementById("bgCanvas").style.backgroundColor = "#313d64";
}
else if(colorr==2023){
   document.getElementById("bgCanvas").style.backgroundColor = "#D4C8EA";
}
 }

 function texts() {
    var textt = document.getElementById("month1").value;
    if(textt==''){
     document.getElementById("changecolor").style.color = "black";
     document.getElementById("shape").style.color = "black";
     document.getElementById("lines").style.color = "black";
    }
//  winter
    else if(textt==12){
     document.getElementById("changecolor").style.color = "#42687c";
     document.getElementById("shape").style.color = "#42687c";
     document.getElementById("lines").style.color = "#42687c";
    }
    else if(textt==1){
      document.getElementById("changecolor").style.color = "#84A5B8";
      document.getElementById("shape").style.color = "#84A5B8";
      document.getElementById("lines").style.color = "#84A5B8";
     }
     else if(textt==2){
      document.getElementById("changecolor").style.color = "#B3DAF1";
      document.getElementById("shape").style.color = "#B3DAF1";
      document.getElementById("lines").style.color = "#B3DAF1";
     }
//spring
     else if(textt==3){
      document.getElementById("changecolor").style.color = "#F3A8BC";
      document.getElementById("shape").style.color = "#F3A8BC";
      document.getElementById("lines").style.color = "#F3A8BC";
     }
     else if(textt==4){
      document.getElementById("changecolor").style.color = "#F5AD94";
      document.getElementById("shape").style.color = "#F5AD94";
      document.getElementById("lines").style.color = "#F5AD94";
     }
     else if(textt==5){
      document.getElementById("changecolor").style.color = "#99C66F";
      document.getElementById("shape").style.color = "#99C66F";
      document.getElementById("lines").style.color = "#99C66F";
     }
//summer
    else if(textt==6){
      document.getElementById("changecolor").style.color = "#FFD700";
      document.getElementById("shape").style.color = "#FFD700";
      document.getElementById("lines").style.color = "#FFD700";
     }
     else if(textt==7){
      document.getElementById("changecolor").style.color = "#15B2D3";
      document.getElementById("shape").style.color = "#15B2D3";
      document.getElementById("lines").style.color = "#15B2D3";
     }
     else if(textt==8){
      document.getElementById("changecolor").style.color = "#F3872F";
      document.getElementById("shape").style.color = "#F3872F";
      document.getElementById("lines").style.color = "#F3872F";
     }
//Autumn
     else if(textt==9){
      document.getElementById("changecolor").style.color = "#9C2706";
      document.getElementById("shape").style.color = "#9C2706";
      document.getElementById("lines").style.color = "#9C2706";
     }
     else if(textt==10){
      document.getElementById("changecolor").style.color = "#D45B12";
      document.getElementById("shape").style.color = "#D45B12";
      document.getElementById("lines").style.color = "#D45B12";
     }
     else if(textt==11){
      document.getElementById("changecolor").style.color = "#603C14";
      document.getElementById("shape").style.color = "#603C14";
      document.getElementById("lines").style.color = "#603C14";
     }
 }

//  //canvas settings
//  const bgCanvas = document.getElementById("bgCanvas");
//  const ctx = bgCanvas.getContext("2d");
//  let coord = { x: 0, y: 0 };
 
//  document.addEventListener("mousedown", start);
//  document.addEventListener("mouseup", stop);
//  window.addEventListener("resize", resize);
 
//  resize();
 
//  function resize() {
//    ctx.bgCanvas.width = window.innerWidth;
//    ctx.bgCanvas.height = window.innerHeight;
//  }
//  function reposition(event) {
//    coord.x = event.clientX - bgCanvas.offsetLeft;
//    coord.y = event.clientY - bgCanvas.offsetTop;
//  }
//  function start(event) {
//    document.addEventListener("mousemove", draw);
//    reposition(event);
//  }
//  function stop() {
//    document.removeEventListener("mousemove", draw);
//  }
//  function draw(event) {
//    // ctx.beginPath();
//    // ctx.linesWidth = 5;
//    // ctx.linesCap = "round";
//    // ctx.strokeStyle = "#ACD3ED";
//    // ctx.moveTo(coord.x, coord.y);
//    // reposition(event);
//    // ctx.linesTo(coord.x, coord.y);
//    // ctx.stroke();

//    var x = document.createElement("IMG");
//    x.setAttribute("src", "cloud.png");
//    x.addEventListener('load', e => {
//      var c = document.getElementById("bgCanvas");
//      ctx.moveTo(coord.x, coord.y);
//      reposition(event);
//      ctx.linesTo(coord.x, coord.y);
//      ctx.drawImage(x, 0, 0);


     
//    })
//  }

let img;
function preload(){
   img = loadImage();
 }
 
 function setup() {
   myDiv = createCanvas(windowWidth, windowHeight);
   myDiv.parent('date');
 }
 
 function draw() {
   background(255,255,255,-1);
   image(img, mouseX, mouseY);
 }
 
 