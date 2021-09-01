function setup() {
  createCanvas(800, 600);
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
  dia = dia * 1 / 2;
  if (dia > 20) {
    drawCircle(x, y-30, dia, dia);
    drawCircle(x, y+30, dia, dia);
    drawCircle(x-30, y, dia, dia);
    drawCircle(x+30, y, dia, dia);
  }
}