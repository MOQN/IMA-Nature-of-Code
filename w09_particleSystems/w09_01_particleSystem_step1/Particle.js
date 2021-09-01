"use strict";

class Particle {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector(random(-10,10),random(-10,10));
    this.acc = createVector(0,0);
    this.rad = random(2,5);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    // damping
    this.vel.mult(0.98);
  }

  display() {
    push();
    noStroke();
    translate(this.pos.x, this.pos.y);
    ellipse(0, 0, this.rad * 2, this.rad * 2);
    pop();
  }
}