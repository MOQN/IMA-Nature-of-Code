function setup() {
  createCanvas(800,600);
  noFill();
  background(255);
  drawCircle(width/2, height/2, 500);
}

function draw() {
  noLoop();
}

function drawCircle(x, y, r) {
  ellipse(x, y, r, r);
  
  if (r > 10) {
    // recursion: call the function inside the function!
    drawCircle(x - r/2, y, r/2);
    drawCircle(x + r/2, y, r/2);
  }				
}