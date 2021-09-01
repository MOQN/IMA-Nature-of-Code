// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 9 2017

let x, y, xspeed, yspeed;

function setup() {
  createCanvas(400, 500);
  x = width / 2;
  y = height / 2;
  xspeed = random(-10, 10);
  yspeed = random(-10, 10);
}

function draw() {
  background(0);

  // update
  x += xspeed;
  y += yspeed;

  // check
  if (x < 0) {
    xspeed *= -1;
  } else if (x > width) {
    xspeed *= -1;
  }
  if (y < 0) {
    yspeed *= -1;
  } else if (y > height) {
    yspeed *= -1;
  }
  
  // and display!
  ellipse(x, y, 30, 30);
}