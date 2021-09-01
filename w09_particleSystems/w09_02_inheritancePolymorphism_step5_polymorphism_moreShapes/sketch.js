let particles = [];


function setup() {
  createCanvas(500, 600);
  
  for (let i = 0; i < 50; i++) {
    let pos = createVector(random(width), random(height));
    let clr = color(random(255), random(255), random(255));
    let chance = floor(random(3));
    switch (chance) {
      case 0:
        particles.push(new Circle(pos, clr));
        break;
      case 1:
        particles.push(new Rectangle(pos, clr));
        break;
      case 2:
        particles.push(new Triangle(pos, clr));
        break;
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