"use strict";

// object: Circle
class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = random(10, 30);
    this.xspeed = random(-10, 10);
    this.yspeed = random(-10, 10);
  }
  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  checkBoundaries() {
    // check the boundaries
    if (this.x < 0) {
      this.x = 0
      this.xspeed *= -1;
      this.applyFriction(0.9);
    }
    if (this.x > width) {
      this.x = width;
      this.xspeed *= -1;
      this.applyFriction(0.9);
    }
    if (this.y < 0) {
      this.y = 0;
      this.yspeed *= -1;
      this.applyFriction(0.9);
    }
    if (this.y > height) {
      this.yspeed *= -1;
      this.y = height;
      this.applyFriction(0.9);
    }
  }
  applyFriction(amount) {
    this.xspeed *= amount;
    this.yspeed *= amount;
  }
  applyGravity(g) {
    this.yspeed += g;
  }
  display() {
    push();

    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.dia, this.dia);

    pop();
  }
}
