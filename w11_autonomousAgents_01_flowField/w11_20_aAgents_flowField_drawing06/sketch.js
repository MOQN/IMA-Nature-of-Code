let RESOLUTION = 10;
let angles = [];
let rows, cols;

let vehicles = [];

function setup() {
  //createCanvas(1000, 600);
  createCanvas(windowWidth, windowHeight);
  background(0);
  rows = ceil(width / RESOLUTION);
  cols = ceil(height / RESOLUTION);

  for (let i = 0; i < 500; i++) {
    vehicles.push(new Vehicle((i*4) % width, height/2));
  }
}

function draw() {
  //background(255);

  // flow field
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {

      let index = r + c * rows; // *** x + y * width

      let x = r * RESOLUTION;
      let y = c * RESOLUTION;

      let xfreq = (x + frameCount*0.1) * 0.02;
      let yfreq = (y + frameCount*0.1) * 0.02;
      let amp = TWO_PI; // range of angle
      let val = noise(xfreq, yfreq) * amp + frameCount*0.005;

      angles[index] = val;

      push();
      translate(x, y);

      // noFill();
      // stroke(200);
      // rect(0, 0, RESOLUTION, RESOLUTION);
      // text(index, 5, 15);

      // rotate(val);
      // stroke(200);
      // line(0, 0, RESOLUTION / 2, 0);

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