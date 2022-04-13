
let angle = 0;

function setup() {
  createCanvas(710, 400);
  // background(102);
  noStroke();
  fill(0);
}

function draw() {
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 5;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill('#fae');
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255, 204, 0);
    ellipse(mouseX, mouseY, 8, 8);
  }
}
