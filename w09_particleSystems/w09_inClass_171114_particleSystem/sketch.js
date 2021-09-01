"use strict";

let pSystems = [];

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(0,15);

  for (let i = 0; i < pSystems.length; i++) {
    pSystems[i].run();
  }
  
  for (let i = pSystems.length-1; i >= 0; i--) {
    if (pSystems[i].isEmpty) {
      pSystems.splice(i, 1);
    }
  }

  fill(255);
  text(pSystems.length, 10, 20);
  for (let i = 0; i < pSystems.length; i++) {
    text(pSystems[i].particles.length, 10, 40 + i * 10);
  }
}

function mousePressed() {
  // create a particle system
  pSystems.push(new ParticleSystem(mouseX, mouseY));
}










class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.acc = createVector();

    this.isDone = false;
    this.lifespan = 1.0;
    this.lifeReduction = random(0.010, 0.001);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    // life

    if (this.lifespan > 0) {
      this.lifespan -= this.lifeReduction;
    } else {
      this.lifespan = 0;
      this.isDone = true;
    }
  }
  applyForce(f) {
    this.acc.add(f);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    ellipse(0, 0, 10, 10);
    pop();
  }
}


class ParticleSystem {
  constructor(x, y) {
    this.particles = [];
    this.origin = createVector(x, y);
    this.scl = random(0.2, 1.8);
    this.clr = color(random(255),random(255),random(255));
    this.rotSpeed = random(-0.03, 0.03);
    this.isEmpty = false;

    for (let i = 0; i < 30; i++) {
      this.particles.push(new Particle(0, 0));
    }
  }
  run() {
    push();
    translate(this.origin.x, this.origin.y);
    scale(this.scl);
    rotate(frameCount * this.rotSpeed);
    
    noStroke();
    fill(this.clr);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      p.display();
      if (p.isDone) {
        this.particles.splice(i, 1);
      }
    }
    if (this.particles.length == 0) {
      this.isEmpty = true;
    }
    pop();
  }
}



//