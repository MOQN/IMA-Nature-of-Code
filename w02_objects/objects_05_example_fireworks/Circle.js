// required to use the es6 model
"use strict";

class Circle {
  // the constructor function can be used in form of
  // new Circle(x, y, xspd, yspd)
  // as it is in the setup function of sketch.js
  constructor(x, y, xspd, yspd) {
    this.x = x;
    this.y = y;
    this.dia = random(5, 10);
    this.xspeed = xspd;
    this.yspeed = yspd;
    // to make the circles scattered
    this.distance = 0;
    // to control the sequences
    this.seq = 0;
    this.isExploded = false;
  }
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  explode() {
    this.isExploded = true;
    this.xspeed = random(-1, 1) * 22;
    this.yspeed = random(-1, 1) * 22;
  }
  applyGravity(g) {
    this.yspeed += g;
  }
  reduceSpeed(amt) {
    this.xspeed *= amt;
    this.yspeed *= amt;
  }
  displayNormal() {
    push();
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.dia, this.dia);
    pop();
  }
  displayAfterExp() {
    this.distance += 0.6;
    for (let angle = 0; angle < 360; angle += 72) {
      push();
      // move the origin of the rotation 
      // to the center of the cirlce
      translate(this.x, this.y);
      // must pass radians in the rotate() function
      // but the angle variable is in the degree form
      // rotation to spin around the cirlces
      rotate(radians(frameCount));
      // rotation to move the circle by degree angle
      rotate(radians(angle));
      // fade out the color of circle gradually
      fill(255 - this.distance * 4);
      noStroke();
      ellipse(0, 0 + this.distance, this.dia, this.dia);
      // extra graphics. Try out!
      /*
      ellipse(0, 0, 5, 5);
      stroke(255 - this.distance * 4);
      line(0,0, 0, 0 + this.distance);
      */
      pop();
    }
  }
  run() {
    switch (this.seq) {
      case 0:
        this.move();
        this.applyGravity(0.15);
        this.displayNormal();
        break;
      case 1:
        // check if the cirlce hasn't exploded yet
        if (this.isExploded == false) {
          this.explode();
        }
        this.move();
        this.reduceSpeed(0.9);
        this.applyGravity(0.15);
        this.displayNormal();
        break;
      // any other cases, except for 0 and 1
      default: 
        this.move();
        this.reduceSpeed(0.7);
        this.displayAfterExp();
        break;
    }
  }
}