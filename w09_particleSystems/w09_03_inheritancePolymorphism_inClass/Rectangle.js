"use strict";

class Rectangle extends Particle {
  constructor(_pos, _clr) {
    super(_pos);
    this.color = _clr;
    this.angleSpeed = random(-0.1, 0.1);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(frameCount * this.angleSpeed);
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.size, this.size);
    pop();
  }
}