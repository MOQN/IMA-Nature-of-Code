function setup() {
  createCanvas(500, 600);
  
}

function draw() {
  background(255);
  
  let freq = frameCount*0.01;
  let amp = TWO_PI;
  let noiseValue = noise(freq) * amp;
  
  translate(width/2, height/2);
  rotate(noiseValue);
  stroke(0);
  strokeWeight(3);
  line(0,0,width/2,0);
}