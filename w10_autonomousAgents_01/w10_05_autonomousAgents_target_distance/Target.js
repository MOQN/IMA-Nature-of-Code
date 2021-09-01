"use strict";

class Target {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.rad = random(10, 30);
  }
  display() {
    push();
    stroke(255);
    fill(100);
    ellipse(this.pos.x, this.pos.y, this.rad * 2, this.rad * 2);
    pop();
  }
}