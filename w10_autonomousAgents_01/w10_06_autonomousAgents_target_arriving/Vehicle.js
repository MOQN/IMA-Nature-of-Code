"use strict";

class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.angle = 0;

    this.maxSpeed = 5;
    this.maxForce = 0.1;

    this.brakeRad = 150;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  checkEdges() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }
  seek(target) {
    let desired = p5.Vector.sub(target.pos, this.pos);
    let distance = desired.mag();

    desired.normalize();
    if (distance < this.brakeRad) {
      let mappedMag = map(distance, 0, this.brakeRad, 0, this.maxSpeed);
      desired.mult(mappedMag);
    } else {
      desired.mult(this.maxSpeed);
    }

    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }
  applyForce(force) {
    this.acc.add(force);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);

    stroke(0,0,255);
    noFill();
    ellipse(0, 0, this.brakeRad * 2, this.brakeRad * 2);

    rotate(this.angle);
    stroke(255);
    fill(200);
    triangle(0, 0, -15, -5, -15, 5);

    pop();
  }
}