let v;

function setup() {
  createCanvas(500,600);
  v = new Vehicle(width/2, height/2);
}

function draw() {
  background(0);
  
  v.detect();
  v.update();
  v.checkEdges();
  v.display();
}