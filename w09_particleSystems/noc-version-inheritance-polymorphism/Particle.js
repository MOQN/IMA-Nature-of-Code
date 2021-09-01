"use strict";

class Particle {

  constructor(position, vel) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255.0;
  }

  run(){
    this.update();
    this.display();
  }
  
  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }
  
  display(){
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(127, 0, 0, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }
  
  isDead(){
    if(this.lifespan < 0.0){
      return true;
    }else{
      return false;
    }
  }

}