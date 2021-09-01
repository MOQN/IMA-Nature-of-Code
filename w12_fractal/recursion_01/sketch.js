function setup() {
  createCanvas(500, 600);
  background(0);

  drawCircle(width / 2, height / 2, 400);
}

function draw() {
  noLoop();
}


function drawCircle(x, y, dia) {
  noFill();
  stroke(255);
  ellipse(x, y, dia, dia);
  dia = dia * 2 / 3;
  if (dia > 10) {
    drawCircle(x, y-30, dia, dia);
  }
}