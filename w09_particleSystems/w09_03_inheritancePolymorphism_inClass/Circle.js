"use strict";

class Circle extends Particle {
  constructor(_pos, _clr) {
    super(_pos);
    this.color = _clr;
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.size, this.size);
    pop();
  }
}