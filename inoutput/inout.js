function myFunction() {
    var x = document.getElementById("color1").value;
    document.getElementById("changecolor").innerHTML = x;

    var y = document.getElementById("month1").value;
    document.getElementById("shape").innerHTML = y;

    var z = document.getElementById("day1").value;
    document.getElementById("lines").innerHTML = z;
  }

 
let colorr;


 function colors() {
   colorr = document.getElementById("color1").value;
   // console.log("up color: " + colorr);

//     if(colorr==''){
//      document.getElementById("changecolor").style.color = "black";
     
//     }
//    //  else if(colorr<2000){
//    //   document.getElementById("bgCanvas").style.backgroundColor = "#88CCD1";
//    //  }
//    //  else if(colorr>2000){
//    //   document.getElementById("bgCanvas").style.backgroundColor = "#FEF987";
//    //  }
//     else if(colorr==2000){
//        document.getElementById("bgCanvas").style.backgroundColor = "#9bb7d4";
//     }
//     else if(colorr==2001){
//       document.getElementById("bgCanvas").style.backgroundColor = "#c74375";
//    }
//    else if(colorr==2002){
//       document.getElementById("bgCanvas").style.backgroundColor = "#bf1932";
//    }
//    else if(colorr==2003){
//       document.getElementById("bgCanvas").style.backgroundColor = "#7bc4c4";
//    }
//    else if(colorr==2004){
//       document.getElementById("bgCanvas").style.backgroundColor = "#e2583e";
//    }
//    else if(colorr==2005){
//       document.getElementById("bgCanvas").style.backgroundColor = "#53b0ae";
//    }
//    else if(colorr==2006){
//       document.getElementById("bgCanvas").style.backgroundColor = "#DECDBE";
//    }
//    else if(colorr==2007){
//       document.getElementById("bgCanvas").style.backgroundColor = "#9b1b30";
//    }
//    else if(colorr==2008){
//       document.getElementById("bgCanvas").style.backgroundColor = "#9b1b30";
//    }
//    else if(colorr==2009){
//       document.getElementById("bgCanvas").style.backgroundColor = "#f0c05a";
//    }


//    else if(colorr==2010){
//       document.getElementById("bgCanvas").style.backgroundColor = "#45b5aa";
//    }
//    else if(colorr==2011){
//      document.getElementById("bgCanvas").style.backgroundColor = "#D94F70";
//   }
//   else if(colorr==2012){
//      document.getElementById("bgCanvas").style.backgroundColor = "#dd4124";
//   }
//   else if(colorr==2013){
//      document.getElementById("bgCanvas").style.backgroundColor = "#00997b";
//   }
//   else if(colorr==2014){
//      document.getElementById("bgCanvas").style.backgroundColor = "#ad5e99";
//   }
//   else if(colorr==2015){
//      document.getElementById("bgCanvas").style.backgroundColor = "#955251";
//   }
//   else if(colorr==2016){
//      document.getElementById("bgCanvas").style.backgroundColor = "#f7caca";
//   }
//   else if(colorr==2017){
//      document.getElementById("bgCanvas").style.backgroundColor = "#88b04b";
//   }
//   else if(colorr==2018){
//      document.getElementById("bgCanvas").style.backgroundColor = "#5f4b8b";
//   }
//   else if(colorr==2019){
//      document.getElementById("bgCanvas").style.backgroundColor = "#ff6f61";
//   }
//   else if(colorr==2020){
//    document.getElementById("bgCanvas").style.backgroundColor = "#0f4c81";
// }
// else if(colorr==2021){
//    document.getElementById("bgCanvas").style.backgroundColor = "yellow";
// }
// else if(colorr==2022){
//    document.getElementById("bgCanvas").style.backgroundColor = "#313d64";
// }
// else if(colorr==2023){
//    document.getElementById("bgCanvas").style.backgroundColor = "#D4C8EA";
// }
 }

   let iconNum;

 function icons() {
   iconNum = document.getElementById("day1").value;
    
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

//p5drawing

let img;
let testColor;

let r = 255;
let g = 255;
let b = 255;
let imgArray = [];

function preload(){
   img = loadImage("cloud.png");
   img2 = loadImage("img2.png");
 }
 
 function setup() {
   myDiv = createCanvas(windowWidth, windowHeight);
   myDiv.parent('bgCanvas');
   // testColor = select('#color1');
   // color1Input = createInput('');

 }



 function draw() {

   // let colorr = testColor.html(color1Input.value());
   background(r,g,b,7);

   if (mouseIsPressed === true || iconNum == 1) {
      
      image(img, mouseX, mouseY);
      }

      if (mouseIsPressed === true || iconNum == 2) {
      
         image(img2, mouseX, mouseY);
      }
   
   console.log(colorr);
   
   if(colorr == 2000){
      r = 155;
      g = 183;
      b = 212;
   }

   
 }


 
 
 