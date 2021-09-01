"use strict";

class Boid {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(1,5),random(-1,1));
    this.acc = createVector();

    this.maxSpeed = 3; // max speed;
    this.maxSteerForce = 0.05; // max steering force

    this.separateDistance = 30;
    this.neighborDistance = 50;
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
    //let sepaForce = this.separate(boids);
    let coheForce = this.cohesion(boids)
  
    //sepaForce.mult(1.5);
    //coheForce.mult(0.5);
    
    //this.applyForce(sepaForce);
    this.applyForce(coheForce);
  }
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxSteerForce);
    return steer;
  }
  separate(others) {
    let vector = createVector(); // sum for now
    let count = 0;
    for (let i = 0; i < others.length; i++) {
      let other = others[i];
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
      // desired velocity
      vector.setMag(this.maxSpeed);
      // steering force
      vector.sub(this.vel);
      vector.limit(this.maxSteerForce);
    }
    return vector;
  }
  cohesion(others) {
    let position = createVector(); //sum
    let count = 0;
    for (let i=0; i<others.length; i++) {
      let other = others[i];
      let distance = this.pos.dist(other.pos);
      if ((distance > 0) && (distance < this.neighborDistance)) {
        position.add(other.pos); // add positions to get the sum
        count++;
      }
    }
    if (count > 0) {
      position.div(count); // becames average
      return this.seek(position);
    }
    return position;
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