"use strict";

let particles = [];

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(0);

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.checkEdges();
    p.display();
    if (p.isDone) {
      particles.splice(i, 1);
    }
  }

  fill(255);
  text(particles.length, 10, 20);
}

function mousePressed() {
  //for (let i = 0; i < 5; i++) {
    if (random(1) < 0.5) {
      particles.push(new Rectangle(mouseX, mouseY));
    } else {
      particles.push(new Circle(mouseX, mouseY));
    }
  //}
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
  checkEdges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(255);
    noFill();
    ellipse(0, 0, 15, 15);
    pop();
  }
}

class Rectangle extends Particle {
  constructor(x, y) {
    super(x, y);
    this.size = random(20, 30);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(0, 0, this.size, this.size);
    pop();
  }
}

class Circle extends Particle {
  constructor(x, y) {
    super(x, y);
    this.size = random(20, 30);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(255, 255, 0);
    ellipse(0, 0, this.size, this.size);
    pop();
  }
}




//