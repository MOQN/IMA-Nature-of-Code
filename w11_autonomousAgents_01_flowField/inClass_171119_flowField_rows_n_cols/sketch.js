"use strict"

let SHOW_FLOWFIELD = true;
let RESOLUTION = 30;
let rows, cols;
let angles = [];

let vehicles = [];


function setup() {
  createCanvas(500, 600);

  rows = ceil(width / RESOLUTION);
  cols = ceil(height / RESOLUTION);

  for (let i = 0; i < 50; i++) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }

}

function draw() {
  background(255);

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      let x = r * RESOLUTION;
      let y = c * RESOLUTION;

      // noise
      let fluctuation = 0.5;
      let randomness = 0.01;
      let freqX = (x + frameCount * fluctuation) * randomness;
      let freqY = (y + frameCount * fluctuation) * randomness;
      let noiseValue = noise(freqX, freqY); // 0 - 1 
      let angleFromNoise = noiseValue * TWO_PI; // 0 - 360 

      // Mouse
      let angleAdj = sin(frameCount * 0.01) * PI;

      let pos = createVector(x + RESOLUTION / 2, y + RESOLUTION / 2);
      let mousePos = createVector(mouseX, mouseY);
      let vector = p5.Vector.sub(mousePos, pos);
      let angleFromMouse = vector.heading();

      let angle = angleFromNoise;

      let index = r + c * rows; // x + y * width
      angles[index] = angle;

      if (SHOW_FLOWFIELD) {
        push();
        translate(x, y);

        noFill();
        //stroke(200);
        //rect(0,0,RESOLUTION, RESOLUTION);

        push();
        translate(RESOLUTION / 2, RESOLUTION / 2);

        rotate(angle);
        stroke(0);
        line(0, 0, RESOLUTION / 2, 0);
        pop();

        pop();
      }
    }
  }







  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];

    //let target = createVector(mouseX, mouseY);
    //v.seek(target);

    let r = floor(v.pos.x / RESOLUTION);
    let c = floor(v.pos.y / RESOLUTION);
    let index = r + c * rows;

    v.flow(angles[index]);

    v.update();
    v.checkEdges();
    v.display();
  }
}