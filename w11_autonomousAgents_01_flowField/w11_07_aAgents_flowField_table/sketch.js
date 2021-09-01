let RESOLUTION = 50;
let rows, cols;

function setup() {
  createCanvas(500, 600);
  rows = ceil(width / RESOLUTION);
  cols = ceil(height / RESOLUTION);
}

function draw() {
  background(255);

  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      let index = x + y * rows; // ***

      push();
      
      // draw the rectangles
      translate(x * RESOLUTION, y * RESOLUTION);
      stroke(0,50);
      rect(0, 0, RESOLUTION, RESOLUTION);
      fill(0,50);
      noStroke();
      text(index, 5, 15);

      pop();
    }
  }
}