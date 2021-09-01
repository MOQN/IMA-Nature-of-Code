// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 14 2017

let circles = [];

function setup() {
  createCanvas(500, 600);

  for (let i = 0; i < 10; i++) {
    let x = width / 2;
    let y = 0;
    let dia = random(20, 30);
    let xspd = random(-4, 4);
    let yspd = random(2, 5);
    circles.push(new Circle(x, y, dia, xspd, yspd));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < circles.length; i++) {
    //the updates to x and y position
    //and displaying of circle is not directly done in the draw function anymore
    circles[i].move();
    circles[i].display();
  }
}

function Circle(x, y, dia, xspd, yspd) {
  this.x = x;
  this.y = y;
  this.dia = dia;
  this.xspd = xspd;
  this.yspd = yspd;

  //Now the Circle class also maintains methods 
  //that can be applied to each Circle object
  this.move = function() {
    this.x += this.xspd;
    this.y += this.yspd;
  }
  this.display = function() {
    ellipse(this.x, this.y, this.dia);
  }
}