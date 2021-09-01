let RESOLUTION = 10;

function setup() {
  createCanvas(500, 600);
  noStroke();
}

function draw() {
  background(255);
  
  for (let y = 0; y < height; y += RESOLUTION) {
    for (let x = 0; x < width; x += RESOLUTION) {
      let xFreq = (x + frameCount) * 0.01;
      let yFreq = (y + frameCount) * 0.01;
      let amp = 255; // the range of color
      let noiseValue = noise(xFreq, yFreq) * amp;

      fill(noiseValue);
      rect(x, y, RESOLUTION, RESOLUTION);
    }
  }
}