"use strict";

class Particle {
  
  constructor(position) {
    this.pos = position.copy();
    this.vel = createVector(random(-5,5),random(-5,5));
    this.acc = createVector();
    this.mass = random(1, 5);
    this.rad = this.mass * 2;
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noFill();
    stroke(255);
    ellipse(0,0, this.rad*2, this.rad*2);
    pop();
  }
  
  bounce() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  
}