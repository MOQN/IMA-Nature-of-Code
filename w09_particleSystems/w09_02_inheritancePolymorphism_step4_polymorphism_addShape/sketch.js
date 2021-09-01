let particles = [];


function setup() {
  createCanvas(500, 600);
  for (let i = 0; i < 10; i++) {
    let pos = createVector(random(width), random(height));
    let clr = color(random(255), random(255), random(255));
    let chance = random(1);
    if (chance < 0.5) {
      particles.push(new Circle(pos, clr));
    } else {
      particles.push(new Rectangle(pos, clr));
    }
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