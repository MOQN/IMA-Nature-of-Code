"use strict";

class PSystem {
  constructor() {
    this.particles = [];
    this.color = color(random(255),random(255),random(255));
    this.rotSpeed = random(0.005, 0.03);
    this.scale = random(0.5, 3);
  }

  run(x,y) {
    push();
    //blendMode(ADD);
    translate(x,y);
    scale(this.scale);
    rotate(frameCount*this.rotSpeed);
    
    this.particles.push(new Particle(0,0));
    
    fill(this.color);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];

      p.update();
      //p.checkOnCanvas();
      p.display();

      if (p.isDone) {
        this.particles.splice(i, 1);
      }
    }

    fill(255, 0, 0);
    //text(this.particles.length, 10, 20);
    pop();
  }
}