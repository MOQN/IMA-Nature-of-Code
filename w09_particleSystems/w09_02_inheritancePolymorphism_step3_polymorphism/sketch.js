let particles = [];


function setup() {
  createCanvas(500, 600);
  for (let i = 0; i < 10; i++) {
    let pos = createVector(random(width), random(height));
    let clr = color(random(255),random(255),random(255));
    particles.push(new Circle(pos,clr));
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