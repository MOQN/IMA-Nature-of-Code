let RESOLUTION = 50;
let angles = [];
let rows, cols;

let vehicles = [];

function setup() {
  createCanvas(500, 600);
  rows = ceil(width / RESOLUTION);
  cols = ceil(height / RESOLUTION);

  vehicles.push(new Vehicle(width / 2, height / 2));
}

function draw() {
  background(255);
  noStroke();

  // flow field
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {

      let index = r + c * rows; // *** x + y * width

      let x = r * RESOLUTION;
      let y = c * RESOLUTION;

      let xfreq = (x + frameCount) * 0.001;
      let yfreq = (y + frameCount) * 0.001;
      let amp = TWO_PI; // range of angle
      let val = noise(xfreq, yfreq) * amp;

      angles[index] = val;

      push();
      translate(x, y);

      // noFill();
      // stroke(200);
      // rect(0, 0, RESOLUTION, RESOLUTION);
      // text(index, 5, 15);

      rotate(val);
      stroke(200);
      line(0, 0, RESOLUTION / 2, 0);

      pop();
    }
  }

  // vehicles
  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];

    let r = floor(v.pos.x / RESOLUTION);
    let c = floor(v.pos.y / RESOLUTION);
    let index = r + c * rows;

    v.flow(angles[index]);
    v.update();
    v.checkEdges();
    v.display();
  }
}