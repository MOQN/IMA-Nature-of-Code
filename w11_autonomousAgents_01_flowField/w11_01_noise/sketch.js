function setup() {
  createCanvas(500, 600);
  background(255);
}

function draw() {
  let freq = frameCount*0.01;
  let amp = 100;
  let noiseValue = noise(freq) * amp;
  
  let x = frameCount % width;
  let y = width/2 + noiseValue;
  
  stroke(0);
  strokeWeight(3);
  point(x,y);
}