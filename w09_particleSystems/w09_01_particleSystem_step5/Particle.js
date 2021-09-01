"use strict";

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.acc = createVector(0, 0);
    this.rad = random(2, 5);

    this.lifespan = 1.0;
    this.lifeDecrease = random(0.005, 0.01);
    this.isDone = false;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // vel adjustment
    this.vel.mult(1.02);

    // lifespan
    this.lifespan -= this.lifeDecrease;
    if (this.lifespan < 0) {
      this.lifespan = 0.0;
      this.isDone = true;
    }
    if (this.lifespan < 0.1) {
      this.rad *= this.lifespan * 10;
    }
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);

    noStroke();
    //fill(255);
    ellipse(0, 0, this.rad * 2, this.rad * 2);
    pop();
  }

  checkOnCanvas() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.isDone = true;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.isDone = true;
    }
  }
}

