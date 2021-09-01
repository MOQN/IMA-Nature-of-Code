"use strict";

let ts = [];

function setup() {
  createCanvas(500, 600);
  for (let i = 0; i < 10; i++) {
    ts.push(new Triangle(width / 2, height / 2));
  }
}

function draw() {
  background(100);

  for (let i = 0; i < ts.length; i++) {
    let mouseVector = createVector(mouseX, mouseY);
    ts[i].move(mouseVector);
    ts[i].display();
  }
}

class Triangle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.color = color(random(255), random(255), random(255));
    this.scale = random(0.5, 2);
    this.angle = 0;
    this.lerpSpeedX = random(0.01, 0.05);
    this.lerpSpeedY = random(0.01, 0.05);
  }
  move(targetVector) {
    let vector = p5.Vector.sub(targetVector, this.pos);
    this.angle = vector.heading();
    this.pos.x = lerp(this.pos.x, targetVector.x, this.lerpSpeedX);
    this.pos.y = lerp(this.pos.y, targetVector.y, this.lerpSpeedY);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    scale(this.scale);
    rotate(this.angle);
    noStroke();
    fill(this.color);
    triangle(0, 0, -25, 10, -25, -10);
    pop();
  }

}