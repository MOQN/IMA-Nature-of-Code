"use strict"

let RESOLUTION = 30;
let rows, cols;
let angles = [];

let vehicles = [];


function setup() {
  createCanvas(500, 600);

  rows = ceil(width / RESOLUTION);
  cols = ceil(height / RESOLUTION);

  for (let i = 0; i < 10; i++) {
    vehicles.push(new Vehicle(width / 2 + random(-30, 30), height / 2 + random(-30, 30)));
  }
}

function draw() {
  background(255);

  angles = []; // to clear the array first
  for (let y = 0; y < height; y += RESOLUTION) {
    for (let x = 0; x < width; x += RESOLUTION) {

      // noise
      let fluctuation = 5.0;
      let randomness = 0.001;
      let freqX = (x + frameCount * fluctuation) * randomness;
      let freqY = (y + frameCount * fluctuation) * randomness;
      let noiseValue = noise(freqX, freqY); // 0 - 1 
      let angleFromNoise = noiseValue * TWO_PI; // 0 - 360 

      // mouse
      let angleAdj = sin(frameCount * 0.01) * PI;
      let pos = createVector(x + RESOLUTION / 2, y + RESOLUTION / 2);
      let mousePos = createVector(mouseX, mouseY);
      let vector = p5.Vector.sub(mousePos, pos);
      let angleFromMouse = vector.heading() + angleAdj;

      let angle = angleFromNoise;

      angles.push(angle);

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
  print(angles.length);






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