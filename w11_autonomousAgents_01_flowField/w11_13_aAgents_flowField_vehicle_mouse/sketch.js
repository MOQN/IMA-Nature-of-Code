let v;

function setup() {
  createCanvas(500,600);
  v = new Vehicle(width/2, height/2);
}

function draw() {
  background(255);
  
  let mouseVec = createVector(mouseX, mouseY);
  let centerVec = createVector(width/2, height/2);
  let vector = p5.Vector.sub(mouseVec, centerVec);
  let angle = vector.heading();
  
  push();
  translate(width/2, height/2);
  rotate(angle);
  stroke(0);
  line(0,0, 200, 0);
  pop();
  
  v.flow(angle);
  v.update();
  v.checkEdges();
  v.display();
}