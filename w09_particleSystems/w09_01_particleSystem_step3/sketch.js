let particles = [];

function setup() {
  createCanvas(500, 600);
  background(0);
}

function draw() {
  background(0);
  
  particles.push( new Particle(width / 2, height / 2) );

  for (let i = particles.length-1; i >= 0 ; i--) {
    let p = particles[i];
    
    p.update();
    p.checkOnCanvas();
    p.display();
    
    if (p.isDone) {
      particles.splice(i,1);
    }
  }
  
  // to limit the particle numbers
  if (particles.length > 500) {
    particles.splice(0,1);
  }
  
  fill(255,0,0);
  text(particles.length, 10, 20);
}