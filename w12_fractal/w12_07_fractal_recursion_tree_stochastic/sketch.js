let angle;

function setup() {
  createCanvas(800, 600);
  background(255);

  angle = PI / 6;
}

function draw() {
  //background(255);

  for (let i = 0; i < 3; i++) {
    push();
    translate(width / 2, height);
    branch(150);
    pop();
  }

  noLoop();
}


function branch(len) {
  let sw = map(len, 0, 200, 1, 30);
  strokeWeight(sw);
  stroke(0);
  line(0, 0, 0, -len);
  translate(0, -len);

  len = len * 2 / 3 * random(0.7, 1.3); //***

  if (len > 5) {
    push();
    rotate(angle + random(-0.3, 0.3)); //***
    branch(len);
    pop();

    push();
    rotate(-angle + random(-0.3, 0.3)); //***
    branch(len);
    pop();
  }
}