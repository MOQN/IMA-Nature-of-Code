// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Sep 7 2017

// Review the variable and functions below:
// frameCount
// frameRate() vs. frameRate(5)

function setup() {
  createCanvas(500,600);
  frameRate(5)
}

function draw() {
  background(0);
  
  fill(255);
  text(frameCount, width/2, height/2);
  text(frameRate(), width/2, height/2+20);
}