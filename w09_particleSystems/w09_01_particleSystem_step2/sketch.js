let particles = [];

function setup() {
  createCanvas(500, 600);
  background(0);
}

function draw() {
  background(0);
  
  particles.push( new Particle(width / 2, height / 2) );

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
  
  if (particles.length > 300) {
    particles.splice(0,1);
  }
  
  fill(255,0,0);
  text(particles.length, 10, 20);
}