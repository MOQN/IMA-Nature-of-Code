let particleSystem;

function setup() {
  createCanvas(640, 360);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);
  particleSystem.addParticle();
  particleSystem.run();
}