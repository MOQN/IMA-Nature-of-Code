let particles = [];

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(0);


  let position = createVector(width / 2, height / 2);
  let clr = color(random(255), random(255), random(255));
  let chance = floor(random(3));

  switch (chance) {
    case 0:
      particles.push(new Particle(position));
      break;
    case 1:
      particles.push(new Circle(position, clr));
      break;
    case 2:
      particles.push(new Rectangle(position, clr));
      break;
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    // remove
    if (particles[i].isDone) {
      particles.splice(i, 1);
    }
  }

  push();
  fill(255, 0, 0);
  text(particles.length, 10, 20);
  pop();
}