let v;
let t;

function setup() {
  createCanvas(500,600);
  v = new Vehicle(width/2, height/2);
  t = new Target(random(width), random(height));
}

function draw() {
  background(0);
  
  t.display();
  
  v.seek(t);
  v.update();
  v.checkEdges();
  v.display();
}

function keyPressed() {
  t = new Target(random(width), random(height));
}