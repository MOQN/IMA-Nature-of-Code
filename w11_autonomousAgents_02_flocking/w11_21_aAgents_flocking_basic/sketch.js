let b;

function setup() {
  createCanvas(500,600);
  b = new Boid(width/2, height/2);
}

function draw() {
  background(0);
  
  let target = createVector(mouseX, mouseY);
  b.seek(target);
  b.update();
  b.checkEdges();
  b.display();
}