"use strict";

class Circle extends Particle {

  constructor(_position, _color) {
    super(_position);
    this.color = _color;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(this.color);
    ellipse(0, 0, this.rad * 2, this.rad * 2);
    pop();
  }

}