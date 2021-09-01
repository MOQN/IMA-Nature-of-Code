"use strict";

class Branch {
  constructor(from, to, thickness, generation) {
    this.vecFrom = from;
    this.vecTo = to;
    this.thickness = thickness;
    this.generation = generation;
  }
  display() {
    push();
    
    stroke(100);
    strokeWeight(this.thickness);
    line(this.vecFrom.x, this.vecFrom.y, this.vecTo.x, this.vecTo.y);
    
    pop();
  }
}