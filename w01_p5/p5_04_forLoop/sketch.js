// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 9 2017

function setup() {
  createCanvas(600, 600);
  noStroke();

  let resolution = 60;
  for (let y = 0; y < height; y += resolution) {
    for (let x = 0; x < width; x += resolution) {
      fill(random(255),random(255),random(255));
      rect(x, y, resolution, resolution);
    }
  }
}

function draw() {
  // nothing :D
}