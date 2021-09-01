function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(255);
  
  for (let x = 0; x < width; x++) {
    let freq = (x + frameCount) * 0.01;
    let amp = 100;
    let noiseValue = noise(freq) * amp;
    
    let y = width / 2 + noiseValue;

    stroke(0);
    strokeWeight(3);
    point(x, y);
  }
}