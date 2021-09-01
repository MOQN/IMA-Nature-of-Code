"use strict";

class Boid {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1,1),random(-1,1));
    this.acc = createVector();

    this.maxSpeed = 3; // max speed;
    this.maxSteerForce = 0.05; // max steering force

    this.separateDistance = 50;
  }
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed); //***
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  applyForce(force) {
    this.acc.add(force);
  }
  flock(boids) {
    // will work on this!
  }
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxSteerForce);
    this.applyForce(steer);
  }
  separate(boids) {
    let vector = createVector(); // sum for now
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let other = boids[i];
      let distance = this.pos.dist(other.pos);
      if (distance > 0 && distance < this.separateDistance) {
        let diff = p5.Vector.sub(this.pos, other.pos);
        diff.normalize();
        diff.div(distance);
        // let's get the sum!
        vector.add(diff);
        count++;
      }
    }
    // let's get the average
    if (count > 0) {
      vector.div(count);
    }
    if (vector.mag() > 0) {
      // desired
      vector.setMag(this.maxSpeed);
      // steer
      vector.sub(this.vel);
      vector.limit(this.maxSteerForce);
    }
    this.applyForce(vector);
  }
  checkEdges() {
    // x
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    // y
    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }
  display() {
    push();

    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    noStroke();
    fill(255);
    triangle(0, 0, -20, 8, -20, -8);
    pop();
  }
}