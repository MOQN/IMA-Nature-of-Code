"use strict";

let debugMode = true;
let blobs = []

function setup() {
  createCanvas(500, 600);
  background(0);
  noStroke();

  blobs.push(new Blob(width / 2, height / 2, 3.0));

}

function draw() {
  if (debugMode) {
    background(0);
  } else {
    background(0, 10);
  }


  for (let i = 0; i < blobs.length; i++) {
    blobs[i].update();
    blobs[i].display();
  }
}


class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.dia = random(50, 80);
    this.angle = random(TWO_PI);
    this.aVel = random(0.01, 0.05);
    this.distance = random(3, 6);
  }
  display() {
    this.angle += this.aVel;

    this.pos.x = cos(this.angle) * this.distance;
    this.pos.y = sin(this.angle) * this.distance;
    let dia = sin(this.angle) * this.distance;

    if (debugMode) {
      noFill();
      stroke(255,255);
      ellipse(this.pos.x, this.pos.y, 10 + this.dia, 10 + this.dia);
      stroke(255,110);
      ellipse(this.pos.x, this.pos.y, 20 + this.dia, 20 + this.dia);
      stroke(255,100);
      ellipse(this.pos.x, this.pos.y, 30 + this.dia, 30 + this.dia);
    } else {
      fill(255, 100);
      ellipse(this.pos.x, this.pos.y, 10 + this.dia, 10 + this.dia);
      ellipse(this.pos.x, this.pos.y, 20 + this.dia, 20 + this.dia);
      ellipse(this.pos.x, this.pos.y, 30 + this.dia, 30 + this.dia);
    }
  }
}

class Blob {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.size = size;
    this.sizeFreq = random(0.01, 0.05);
    this.scale = 1.0;
    this.particles = [];
    let randomNumber = floor(random(3, 5));
    for (let i = 0; i < randomNumber; i++) {
      this.particles.push(new Particle(this.pos.x, this.pos.y));
    }

  }
  update() {
    this.scale = this.size * map(sin(frameCount * this.sizeFreq), -1, 1, 0.9, 1.1);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    scale(this.scale);
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
    pop();
  }
}