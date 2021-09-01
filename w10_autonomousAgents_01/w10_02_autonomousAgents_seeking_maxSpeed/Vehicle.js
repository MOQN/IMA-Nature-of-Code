"use strict";

class Vehicle {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
    this.angle = 0;
    this.maxSpeed = 5; // max desired speed
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.normalize();
    desired.mult(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.vel);
    this.applyForce(steer);
  }
  applyForce(force) {
    this.acc.add(force);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    
    stroke(255);
    fill(200);
    triangle(0,0,-15,-5,-15,5);
    
    pop();
  }
}


