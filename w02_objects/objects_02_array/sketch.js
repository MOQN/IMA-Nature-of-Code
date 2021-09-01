// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 14 2017

let x = [];
let y = [];
let dia = [];
let xspd = []
let yspd = [];

function setup() {
  createCanvas(500, 600);
  for (let i = 0; i < 10; i++) {
    x[i] = width / 2;
    y[i] = 0;
    dia[i] = random(20, 30);
    xspd[i] = random(-4, 4);
    yspd[i] = random(2, 5);
  }
}

function draw() {
  background(0);

  // how about using length instead of the hardcoded number 2?
  for (let i = 0; i < 10; i++) {  
    x[i] += xspd[i];
    y[i] += yspd[i];
    ellipse(x[i], y[i], dia[i]);
  }
}