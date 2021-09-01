"use strict";

let v;

function setup() {
  createCanvas(500, 600);
  v = new Vehicle(width / 2, height / 2);
}


function draw() {
  background(0);

  let target = createVector(mouseX, mouseY);
  v.seek(target);
  v.update();
  v.display();
}


class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.angle = 0;

    this.maxDesiredVel = 5; // maxSpeed
    this.maxSteerForce = 0.2; // maxForce
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  applyForce(f) {
    this.acc.add(f);
  }
  seek(target) {
    let desiredVel = p5.Vector.sub(target, this.pos);
    desiredVel.normalize();
    desiredVel.mult(this.maxDesiredVel); // maxSpeed

    let steerForce = p5.Vector.sub(desiredVel, this.vel);
    steerForce.limit(this.maxSteerForce); // maxForce
    this.applyForce(steerForce);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    noStroke();
    fill(255);
    triangle(0, 0, -20, -8, -20, 8);

    pop();
  }
}