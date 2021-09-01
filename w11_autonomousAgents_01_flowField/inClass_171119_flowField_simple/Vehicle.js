"use strict"

class Vehicle {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
    this.angle = 0;
    
    this.maxDesiredVel = 5;
    this.maxSteerForce = 0.2;
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
    desiredVel.normalize();
    desiredVel.mult( this.maxDesiredVel );
    
    let steerForce = p5.Vector.sub(desiredVel, this.vel);
    steerForce.limit( this.maxSteerForce );
    this.applyForce( steerForce );
  }
  flow(angle) {
    let desiredVel = p5.Vector.fromAngle( angle );
    //desiredVel.normalize();
    desiredVel.mult( this.maxDesiredVel );
    
    let steerForce = p5.Vector.sub(desiredVel, this.vel);
    steerForce.limit( this.maxSteerForce );
    this.applyForce( steerForce );
  }
  checkEdges() {
    // x axis
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    // y axis
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
    fill(0);
    triangle(0,0,-20, 8, -20, -8);
    pop();
  }
}