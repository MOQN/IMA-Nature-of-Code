let RESOLUTION = 30;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(255);
  
  stroke(0);
  for (let y = 0; y < height; y += RESOLUTION) {
    for (let x = 0; x < width; x += RESOLUTION) {
      let xFreq = (x + frameCount) * 0.01;
      let yFreq = (y + frameCount) * 0.01;
      let amp = TWO_PI; // the range of angle
      let noiseValue = noise(xFreq, yFreq) * amp;
      push();
      translate(x,y);
      rotate(noiseValue);
      line(0,0,RESOLUTION/2,0);
      pop();
    }
  }
}