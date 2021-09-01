let angle;
let diff;
function setup() {
  createCanvas(800, 600);
  background(255);

  angle = PI / 6;
  diff = random(0,5);
}

function draw() {
  background(255);


  push();
  translate(width / 2, height);
  branch(160, diff, 0.005);
  pop();

  push();
  translate(width / 2, height);
  branch(140, diff+2, 0.004);
  pop();

  push();
  translate(width / 2, height);
  branch(130, diff+6, 0.003);
  pop();

  //noLoop();
}


function branch(len, diff, windFreq) {
  let sw = map(len, 0, 200, 1, 30);
  strokeWeight(sw);
  stroke(0);
  line(0, 0, 0, -len);
  translate(0, -len);

  angle1 = map(noise(diff), 0, 1, radians(0), radians(60));
  angle2 = map(noise(diff+1), 0, 1, radians(0), radians(60));
  let noiseLength = map(noise(diff), 0, 1, 0.5, 1.5);
  len = len * 2 / 3 * noiseLength; //***

  let noiseWind = map(noise(frameCount * windFreq), 0, 1, -0.1, 0.1);

  if (len > 10) {
    push();
    rotate(angle1 + noiseWind); //***
    branch(len, diff + 0.3, windFreq * 1.1);
    pop();

    push();
    rotate(-angle2 + noiseWind); //***
    branch(len, diff + 1, windFreq * 1.2);
    pop();
  }
}