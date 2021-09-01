let v;

function setup() {
  createCanvas(500,600);
  v = new Vehicle(width/2, height/2);
}

function draw() {
  background(0);
  
  let mouseVec = createVector(mouseX, mouseY);
  v.seek(mouseVec);
  v.update();
  v.display();
}