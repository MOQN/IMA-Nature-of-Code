let v;
let MARGIN = 80;

function setup() {
  createCanvas(500, 600);
  v = new Vehicle(width / 2, height / 2);
}

function draw() {
  background(0);
  
  // wall
  noFill();
  stroke(100);
  rect(MARGIN, MARGIN, width - MARGIN * 2, height - MARGIN * 2);
  
  // vehicle
  v.update();
  v.checkWalls();
  v.display();
}