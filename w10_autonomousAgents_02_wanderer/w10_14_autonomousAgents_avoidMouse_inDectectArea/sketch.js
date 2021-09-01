let v;

function setup() {
  createCanvas(500,600);
  v = new Vehicle(width/2, height/2);
}

function draw() {
  background(0);
  
  let target = createVector(mouseX, mouseY);
  v.detect(target);
  v.update();
  v.checkEdges();
  v.display();
}