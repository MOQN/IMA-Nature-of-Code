// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 9 2017

function setup() {
  createCanvas(500, 700);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    background(255);
  }
}

function mousePressed() {
  // this won't work
  background(255,0,0);
}
