let DEBUG_MODE = false;

let x, y, dia;
let vibrationRange;

function setup() {
  createCanvas(500, 600);
  background(0);

  x = width / 2;
  y = height / 2;
  dia = 100;
  vibrationRange = 5;
}

function draw() {
  background(0);

  if (DEBUG_MODE) {
    noFill();
    stroke(255);
  } else {
    fill(255);
    noStroke();
  }
  for (let i = 0; i < 5; i++) {
    let vX = random(-vibrationRange, vibrationRange);
    let vY = random(-vibrationRange, vibrationRange);
    ellipse(x + vX, y + vY, dia, dia);
  }

  fill(255);
  noStroke();
  text('Press "SpaceBar" to toggle the debug mode.', 10, 20);
}

function keyPressed() {
  if (key == " ") {
    DEBUG_MODE = !DEBUG_MODE;
  }
}