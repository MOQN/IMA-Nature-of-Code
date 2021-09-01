let RESOLUTION = 30;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  noFill();

  for (let y = 0; y < height; y += RESOLUTION) {
    for (let x = 0; x < width; x += RESOLUTION) {
      let fluctuationSpeed = 0.5
      let randomness = 0.005;
      
      let freqX = (x + frameCount * fluctuationSpeed) * randomness;
      let freqY = (y + frameCount * fluctuationSpeed) * randomness;
      let noiseValue = noise(freqX, freqY); // range: 0 - 1
      
      let angle = map(noiseValue, 0, 1, 0, PI * 2); 

      let vector = p5.Vector.fromAngle(angle);
      vector.mult(RESOLUTION * 0.5);

      push();
      translate(x, y);

      // comment out this if the sketch is slow
      //stroke(50);
      //rect(0, 0, RESOLUTION, RESOLUTION);
      
      // move to the center of each grid
      push();
      translate(RESOLUTION/2, RESOLUTION/2);
      stroke(255);
      line(0,0, vector.x, vector.y);
      pop();
      
      pop();
    }
  }

}