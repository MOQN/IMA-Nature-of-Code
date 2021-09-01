"use strict";

class Particle {
  constructor(_pos) {
    this.pos = _pos.copy();
    this.vel = createVector(random(-5,5),random(-5,5));
    this.acc = createVector();
    
    this.size = random(5,10);
    
    this.lifespan = 1.0;
    this.lifeDecrease = random(0.01, 0.005);
    this.isDone = false;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    // dying
    this.lifespan -= this.lifeDecrease;
    if (this.lifespan < 0) {
      this.lifespan = 0;
      this.isDone = true;
    }
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(255, 255*this.lifespan);
    noFill();
    ellipse(0,0, this.size, this.size);
    pop();
  }
}