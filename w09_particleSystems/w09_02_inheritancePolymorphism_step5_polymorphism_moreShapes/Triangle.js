"use strict";

class Triangle extends Particle {

  constructor(_position, _color) {
    super(_position);
    this.color = _color;
    this.rotSpeed = random(-0.2, 0.2);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(frameCount*this.rotSpeed);
    noStroke();
    fill(this.color);
    triangle(0, this.rad, -this.rad, -this.rad, this.rad, -this.rad);
    pop();
  }

}