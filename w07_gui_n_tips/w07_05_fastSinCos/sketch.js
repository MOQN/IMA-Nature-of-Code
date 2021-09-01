"use strict";

let cosArray = [];
let sinArray = [];
let sinCosResolution = 360;

let blobs = []

function setup() {
  createCanvas(500, 600);
  background(0);
  noStroke();
  for (let i = 0; i < 200; i++) {
    blobs.push(new Blob(random(width), random(width), random(0.1, 0.8)));
  }

  for (let i = 0; i < sinCosResolution; i++) {
    let angle = map(i, 0, sinCosResolution, 0, TWO_PI);
    cosArray.push(cos(angle));
    sinArray.push(sin(angle));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < blobs.length; i++) {
    blobs[i].update();
    blobs[i].display();
  }

  fill(255, 0, 0);
  text(round(frameRate()), 10, 20);
}




function mSin(radian) {
  let index = floor(map(radian % TWO_PI, 0, TWO_PI, 0, sinCosResolution));
  return sinArray[index];
}

function mCos(radian) {
  let index = floor(map(radian % TWO_PI, 0, TWO_PI, 0, sinCosResolution));
  return cosArray[index];
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

    this.pos.x = mCos(this.angle) * this.distance;
    this.pos.y = mSin(this.angle) * this.distance;
    let dia = mSin(this.angle) * this.distance;

    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 10 + this.dia, 10 + this.dia);
    ellipse(this.pos.x, this.pos.y, 20 + this.dia, 20 + this.dia);
    ellipse(this.pos.x, this.pos.y, 30 + this.dia, 30 + this.dia);
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
    this.scale = this.size * map(mSin(frameCount * this.sizeFreq), -1, 1, 0.9, 1.1);
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