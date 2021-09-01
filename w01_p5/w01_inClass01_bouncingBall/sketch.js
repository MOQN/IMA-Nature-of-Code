// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 10 2017

var x, y;
var xspeed, yspeed;
var gravity;

function setup() {
  createCanvas(600, 400);
  x = width / 2;
  y = height / 2;
  xspeed = random(-1, 1) * 10;
  yspeed = random(-1, 1) * 10;
  gravity = 1.0;
}

function draw() {
  background(0);
  
  // update the position by applying the speed
  x = x + xspeed;
  y = y + yspeed;
  
  // this is the error!
  yspeed += gravity; 
  
  // air friction
  //xspeed *= 0.99;
  //yspeed *= 0.99;

  // check the boundaries
  if (x < 0) {
    x = 0
    xspeed *= -1;
  }
  if (x > width) {
    x = width;
    xspeed *= -1;
  }
  if (y < 0) {
    y = 0;
    yspeed *= -1;
  }
  if (y > height) {
    yspeed *= -1;
    y = height;
    // here it loses certain amount of speed
    //xspeed *= 0.9;
    //yspeed *= 0.9;
  }
  
  // display
  ellipse(x, y, 30, 30);
}

function mousePressed() {
  xspeed = random(-1, 1) * 20;
  yspeed = random(-1, -0.7) * 20;
}