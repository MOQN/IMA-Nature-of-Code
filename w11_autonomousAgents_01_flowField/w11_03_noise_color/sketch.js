function setup() {
  createCanvas(500, 600);
  noStroke();
}

function draw() {
  background(255);
  
  for (let x = 0; x < width; x++) {
    let freq = (x + frameCount) * 0.01;
    let amp = 255; // the range of color
    let noiseValue = noise(freq) * amp;

    fill(noiseValue);
    rect(x,0,1,height);
  }
}