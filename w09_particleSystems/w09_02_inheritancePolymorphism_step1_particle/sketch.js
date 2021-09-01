let particles = [];


function setup() {
  createCanvas(500, 600);
  for (let i = 0; i < 10; i++) {
    let pos = createVector(random(width), random(height));
    particles.push(new Particle(pos));
  }
}


function draw() {
  background(0);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].bounce();
    particles[i].display();
  }
}