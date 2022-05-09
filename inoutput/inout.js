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
   img3 =loadImage("img3.png");
   img4 = loadImage("img4.png");
   img5 = loadImage("img5.png");
   img6 =loadImage("img6.png");
   img7 = loadImage("img7.png");
   img8 = loadImage("img8.png");
   img9 =loadImage("img9.png");
   img10 = loadImage("img10.png");
   img11 = loadImage("img11.png");
   img12 =loadImage("img12.png");
   img13 = loadImage("img13.png");
   img14 = loadImage("img14.png");
   img15 =loadImage("img15.png");
   img16 = loadImage("img16.png");
   img17 = loadImage("img17.png");
   img18 =loadImage("img18.png");
   img19 = loadImage("img19.png");
   img20 = loadImage("img20.png");
   img21 =loadImage("img21.png");
   img22 = loadImage("img22.png");
   img23 =loadImage("img23.png");
   img24 = loadImage("img24.png");
   img25 = loadImage("img25.png");
   img26 =loadImage("img26.png");
   img27 = loadImage("img27.png");
   img28 = loadImage("img28.png");
   img29 =loadImage("img29.png");
   img30 = loadImage("img30.png");
   img31 = loadImage("img31.png");

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

if(mouseIsPressed===true|| iconNum== ''){

}
   else if (mouseIsPressed === true || iconNum == 1) {  
      image(img, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 2) {
         image(img2, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 3) {
         image(img3, mouseX, mouseY);
      }
   else if (mouseIsPressed === true || iconNum == 4) {
      image(img4, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 5) {
         image(img5, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 6) {
         image(img6, mouseX, mouseY);
      }
   else if (mouseIsPressed === true || iconNum == 7) {  
      image(img7, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 8) {
         image(img8, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 9) {
         image(img9, mouseX, mouseY);
      }
   else if (mouseIsPressed === true || iconNum == 10) {
      image(img10, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 11) {
         image(img11, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 12) {
         image(img12, mouseX, mouseY);
      }
   else if (mouseIsPressed === true || iconNum == 13) {  
      image(img13, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 14) {
      image(img14, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 15) {
         image(img15, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 16) {
         image(img16, mouseX, mouseY);
      }
   else if (mouseIsPressed === true || iconNum == 17) {  
      image(img17, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 18) {
         image(img18, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 19) {
         image(img19, mouseX, mouseY);
      }
   else if (mouseIsPressed === true || iconNum == 20) {
      image(img20, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 21) {  
      image(img21, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 22) {
         image(img22, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 23) {
         image(img23, mouseX, mouseY);
      }
   else if (mouseIsPressed === true || iconNum == 24) {
      image(img24, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 25) {
         image(img25, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 26) {
         image(img26, mouseX, mouseY);
      }
   else if (mouseIsPressed === true || iconNum == 27) {  
      image(img27, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 28) {
         image(img28, mouseX, mouseY);
      }
      
   else  if (mouseIsPressed === true || iconNum == 29) {
         image(img29, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 30) {
      image(img30, mouseX, mouseY);
      }

   else if (mouseIsPressed === true || iconNum == 31) {
      image(img31, mouseX, mouseY);
      }   


   console.log(colorr);
   
   if(colorr == 2000){
      r = 155;
      g = 183;
      b = 212;
   }
   if(colorr == 2001){
      r = 199;
      g = 67;
      b = 117;
   }
   if(colorr == 2002){
      r = 191;
      g = 25;
      b = 50;
   }
   if(colorr == 2003){
      r = 123;
      g = 196;
      b = 196;
   }
   if(colorr == 2004){
      r = 226;
      g = 88;
      b = 62;
   }
   if(colorr == 2005){
      r = 83;
      g = 176;
      b = 174;
   }
   if(colorr == 2006){
      r = 222;
      g = 205;
      b = 190;
   }
   if(colorr == 2007){
      r = 155;
      g = 35;
      b = 53;
   }
   if(colorr == 2008){
      r = 91;
      g = 94;
      b = 166;
   }
   if(colorr == 2009){
      r = 239;
      g = 192;
      b = 80;
   }
   if(colorr == 2010){
      r = 69;
      g = 184;
      b = 172;
   }
   if(colorr == 2011){
      r = 214;
      g = 80;
      b = 118;
   }
   if(colorr == 2012){
      r = 226;
      g = 73;
      b = 47;
   }
   if(colorr == 2013){
      r = 0;
      g = 155;
      b = 119;
   }
   if(colorr == 2014){
      r = 181;
      g = 101;
      b = 167;
   }
   if(colorr == 2015){
      r = 255;
      g = 218;
      b = 182;
   }
   if(colorr == 2016){
      r = 247;
      g = 202;
      b = 201;
   }
   if(colorr == 2017){
      r = 136;
      g = 176;
      b = 75;
   }
   if(colorr == 2018){
      r = 107;
      g = 91;
      b = 149;
   }
   if(colorr == 2019){
      r = 255;
      g = 111;
      b = 97;
   }
   if(colorr == 2020){
      r = 15;
      g = 76;
      b = 129;
   }
   if(colorr == 2021){
      r = 245;
      g = 223;
      b = 77;
   }
   if(colorr == 2022){
      r = 102;
      g = 103;
      b = 171;
   }
   if(colorr == 2023){
      r = 212;
      g = 200;
      b = 234;
   }
 }


 
 
 