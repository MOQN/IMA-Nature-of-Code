let vehicles = [];

function setup() {
  createCanvas(1000, 600);

  for (let i = 0; i < 50; i++) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    
    let target = createVector(mouseX, mouseY);
    v.seek(target);
    for (let j = 0; j < vehicles.length; j++) {
      if (j != i) {
        let target = vehicles[j].pos;
        v.detect(target);
      }
    }
    v.update();
    v.checkEdges();
    v.display();
  }
}

function mousePressed() {
  DEBUG_MODE = !DEBUG_MODE;
}