"use strict"

let perlin = new ImprovedNoise();
let particles = [];

function setup() {
  createCanvas(1000, 800, WEBGL);
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle(0, 0, 0));
  }

}

function draw() {
  orbitControl();
  background(0);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.applyNoise3D();
    p.update();
    p.display();
  }
}