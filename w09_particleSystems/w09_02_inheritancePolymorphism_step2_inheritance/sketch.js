let particles = [];


function setup() {
  createCanvas(500, 600);
  for (let i = 0; i < 10; i++) {
    let position = createVector(random(width), random(height));
    particles.push(new Circle(position));  // push Circle into Particle!
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