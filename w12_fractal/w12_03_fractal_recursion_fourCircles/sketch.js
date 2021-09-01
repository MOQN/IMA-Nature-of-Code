function setup() {
  createCanvas(800, 600);
  noFill();
  background(255);
  drawCircle(width / 2, height / 2, 300);
}

function draw() {
  noLoop();
}

function drawCircle(x, y, r) {
  ellipse(x, y, r, r);

  if (r > 10) {
    // recursion: call the function inside the function!
    // x
    drawCircle(x - r / 2, y, r / 2);
    drawCircle(x + r / 2, y, r / 2);
    // y
    drawCircle(x, y - r / 2, r / 2);
    drawCircle(x, y + r / 2, r / 2);
  }
}