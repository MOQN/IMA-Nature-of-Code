"use strict"

class Boid {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector();

    this.maxSpeed = 3; // max speed;
    this.maxSteerForce = 0.05; // max steering force

    this.separateDistance = 30;
    this.neighborDistance = 50;
  }
  update() {
    this.vel.add(this.acc);
    //this.vel.limit(this.maxSpeed); // ***
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  applyForce(force) {
    this.acc.add(force);
  }
  flock(others) {
    let cForce = this.cohision(others);
    let sForce = this.separate(others);
    let aForce = this.align(others);
    
    cForce.mult(0.5);
    sForce.mult(1.0);
    aForce.mult(2.0);
    
    this.applyForce(cForce);
    this.applyForce(sForce);
    this.applyForce(aForce);
  }
  separate(others) {
    // avg of vectors
    let vector = createVector(); // sum
    let count = 0;
    for (let i = 0; i < others.length; i++) {
      let other = others[i];
      let distance = this.pos.dist(other.pos);
      if (distance > 0 && distance < this.separateDistance) {
        // vectors!
        let diff = p5.Vector.sub(this.pos, other.pos);
        diff.normalize();
        diff.div(distance);
        // finally sum!
        vector.add(diff);
        count++;
      }
    }
    // average!
    if (count > 0) {
      vector.div(count);
    }
    if (vector.mag() > 0) {
      // disired vector
      vector.setMag(this.maxSpeed); // ***
      // steering force
      vector.sub(this.vel);
      vector.limit(this.maxSteerForce);
      //return vector;
    }
    // apply
    //this.applyForce(vector);
    return vector;
  }
  cohision(others) {
    //sum
    let position = createVector();
    let count = 0;
    // forloop
    for (let i = 0; i < others.length; i++) {
      let other = others[i];
      let distance = this.pos.dist(other.pos);
      if (distance > 0 && distance < this.neighborDistance) {
        position.add(other.pos);
        count++;
      }
    }
    // avg
    if (count > 0) {
      position.div(count);
      return this.seek(position);
    }
    return position;
  }
  align(others) {
    // sum
    let velocity = createVector();
    let count = 0;
    // forloop
    for (let i = 0; i < others.length; i++) {
      let other = others[i];
      let distance = this.pos.dist(other.pos);
      if (distance > 0 && distance < this.neighborDistance) {
        velocity.add(other.vel);
        count++;
      }
    }
    // avg
    if (count > 0) {
      velocity.div(count);
      velocity.setMag(this.maxSpeed);
      let steer = p5.Vector.sub(velocity, this.vel);
      steer.limit(this.maxSteerForce);
      //this.applyForce(steer);
      return steer;
    }
    return velocity;
  }
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxSpeed); // ***
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxSteerForce);
    //this.applyForce(steer);
    return steer;
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