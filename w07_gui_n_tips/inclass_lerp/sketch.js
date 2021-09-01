let x;
function setup() {
  createCanvas(500,600);
  x = 0;
}

function draw() {
  background(0);
  x = lerp(x, width, 0.05);
  ellipse(x, height/2, 30, 30);
}