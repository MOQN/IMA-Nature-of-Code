"use strict";

let MARGIN = 100;
let v;

function setup() {
  createCanvas(500, 600);
  v = new Vehicle(width / 2, height / 2);
  v.vel = createVector(5, -2);
}


function draw() {
  background(0);

  // area
  noFill();
  stroke(150);
  rect(MARGIN, MARGIN, width - MARGIN * 2, height - MARGIN * 2);

  v.update();
  v.checkArea();
  v.display();
}


class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.angle = 0;

    this.maxDesiredVel = 5; // maxSpeed
    this.maxSteerForce = 0.1; // maxForce

    this.brakeRad = 100;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  applyForce(f) {
    this.acc.add(f);
  }
  seek(target) {
    let desiredVel = p5.Vector.sub(target, this.pos);
    let distance = desiredVel.mag();

    desiredVel.normalize();
    if (distance > this.brakeRad) {
      desiredVel.mult(this.maxDesiredVel); // maxSpeed
    } else {
      //slow down
      let mappedMag = map(distance, 0, this.brakeRad, 0, this.maxDesiredVel);
      desiredVel.mult(mappedMag); // maxSpeed
    }

    let steerForce = p5.Vector.sub(desiredVel, this.vel);
    steerForce.limit(this.maxSteerForce); // maxForce
    this.applyForce(steerForce);
  }
  checkArea() {
    // x
    if (this.pos.x < MARGIN) {
      let desiredVel = createVector(this.maxDesiredVel, this.vel.y);
      let steerForce = p5.Vector.sub(desiredVel, this.vel);
      steerForce.limit(this.maxSteerForce); // maxForce
      this.applyForce(steerForce);
    } else if (this.pos.x > width - MARGIN) {
      let desiredVel = createVector(-this.maxDesiredVel, this.vel.y);
      let steerForce = p5.Vector.sub(desiredVel, this.vel);
      steerForce.limit(this.maxSteerForce); // maxForce
      this.applyForce(steerForce);
    }
    
    // y
    if (this.pos.y < MARGIN) {
      let desiredVel = createVector(this.vel.x, this.maxDesiredVel);
      let steerForce = p5.Vector.sub(desiredVel, this.vel);
      steerForce.limit(this.maxSteerForce); // maxForce
      this.applyForce(steerForce);
    } else if (this.pos.y > height - MARGIN) {
      let desiredVel = createVector(this.vel.x, -this.maxDesiredVel);
      let steerForce = p5.Vector.sub(desiredVel, this.vel);
      steerForce.limit(this.maxSteerForce); // maxForce
      this.applyForce(steerForce);
    }
    
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    noStroke();
    fill(255);
    triangle(0, 0, -20, -8, -20, 8);

    pop();
  }
}