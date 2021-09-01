"use strict";

class Particle {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector(random(-5,5),random(-5,5));
    this.acc = createVector(0,0);
    this.rad = random(2,5);
    this.isDone = false;
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    // damping
    // this.vel.mult(0.98);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    
    noStroke();
    fill(255);
    ellipse(0, 0, this.rad * 2, this.rad * 2);
    pop();
  }
}