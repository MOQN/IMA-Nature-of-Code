"use strict";

class Rectangle extends Particle {

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
    rectMode(CENTER);
    rect(0, 0, this.rad * 2, this.rad * 2);
    pop();
  }

}