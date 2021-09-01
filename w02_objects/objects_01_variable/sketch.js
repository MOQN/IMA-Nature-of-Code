// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 14 2017

let x, y, dia;
let xspd, yspd;

let x1, y1, dia1;
let xspd1, yspd1;

function setup() {
  createCanvas(500, 600);
  
  x = width / 2;
  y = 0;
  dia = random(20,30);
  xspd = random(-4, 4);
  yspd = random(2, 5);
  
  x1 = width / 2;
  y1 = 0;
  dia1 = random(20,30);
  xspd1 = random(-4, 4);
  yspd1 = random(2, 5);
}

function draw() {
  background(0);
  
  x += xspd;
  y += yspd;
  
  x1 += xspd1;
  y1 += yspd1;
  
  ellipse(x, y, dia);
  ellipse(x1, y1, dia1);
}