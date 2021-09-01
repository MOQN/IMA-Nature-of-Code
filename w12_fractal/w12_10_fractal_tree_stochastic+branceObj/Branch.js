"use strict";

class Branch {
  constructor(from, to, thickness) {
    this.vecFrom = from;
    this.vecTo = to;
    this.thickness = thickness;
  }
  display() {
    push();
    
    stroke(255);
    strokeWeight(this.thickness);
    line(this.vecFrom.x, this.vecFrom.y, this.vecTo.x, this.vecTo.y);
    
    pop();
  }
}