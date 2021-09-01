// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 9 2017

let x = 200;
let y = 400;
let mSize = 100;

// figure it out why they are errors!
// let x = width/2;
// let y = height/2;
// let size = 100;

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);

  fill(255, 0, 0);
  ellipse(x, y, mSize, mSize);
}
