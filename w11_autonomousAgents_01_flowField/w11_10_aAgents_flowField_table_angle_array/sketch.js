let RESOLUTION = 50;
let rows, cols;
let angles = [];

function setup() {
  createCanvas(500, 600);
  rows = ceil(width / RESOLUTION);
  cols = ceil(height / RESOLUTION);
}

function draw() {
  background(255);

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      let index = r + c * rows; // ***

      let x = r * RESOLUTION;
      let y = c * RESOLUTION;
      
      let xFreq = (x + frameCount) * 0.001;
      let yFreq = (y + frameCount) * 0.001;
      let noiseValue = noise(xFreq, yFreq);
      let angle = map(noiseValue, 0, 1, 0, TWO_PI);
      
      push();
      // draw the rectangles
      translate(x, y);
      stroke(0, 50);
      rect(0, 0, RESOLUTION, RESOLUTION);
      fill(0, 50);
      noStroke();
      text(index, 5, 15);

      // draw the lines
      translate(RESOLUTION / 2, RESOLUTION / 2);
      rotate(angle);
      stroke(0);
      line(0, 0, RESOLUTION / 2, 0);
      pop();

      angles[index] = angle;
    }
  }
}