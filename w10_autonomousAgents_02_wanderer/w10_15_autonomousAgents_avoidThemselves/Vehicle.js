"use strict";

let DEBUG_MODE = false;


class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(5, 0);
    this.acc = createVector();
    this.angle = 0;
     
    this.maxDesiredVelocity = 5;
    this.maxSteerForce = 0.05;

    // detect area
    this.detectVector = createVector();
    this.directionVector = createVector();
    this.predictDistance = 40;
    this.detectRadius = 80;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  detect(target) {
    this.detectVector = p5.Vector.mult(this.vel.copy().normalize(), this.predictDistance);
    let centerPos = p5.Vector.add(this.pos, this.detectVector)

    let distance = centerPos.dist(target);
    if (distance < this.detectRadius) {
      
      this.maxDesiredVelocity = map(distance, 0, this.detectRadius, 2, 5);
      
      this.directionVector = p5.Vector.sub(target, centerPos);
      this.directionVector.setMag(this.detectRadius);
      this.directionVector.mult(-1);

      let directionPos = p5.Vector.add(centerPos, this.directionVector);
      this.seek(directionPos);
    }
  }
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxDesiredVelocity);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxSteerForce);
    this.applyForce(steer);
  }
  applyForce(force) {
    this.acc.add(force);
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
  display() {
    push();
    translate(this.pos.x, this.pos.y);

    push();
    rotate(this.angle);
    noStroke();
    fill(255);
    triangle(0, 0, -20, 8, -20, -8);
    pop();

    if (DEBUG_MODE) {
      // detecting graphics
      noFill();
      stroke(255, 0, 0);
      line(0, 0, this.detectVector.x, this.detectVector.y);

      translate(this.detectVector.x, this.detectVector.y);
      ellipse(0, 0, this.detectRadius * 2, this.detectRadius * 2);

      stroke(0, 255, 0);
      line(0, 0, this.directionVector.x, this.directionVector.y);
    }

    pop();
  }
}