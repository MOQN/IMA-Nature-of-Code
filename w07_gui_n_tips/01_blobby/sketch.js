function setup() {
  createCanvas(500, 600);
  background(0);
}

function draw() {
  background(0,10);

  noStroke();
  fill(255, 10);
  drawBlob(250, 300, 180);
}

function drawBlob(x, y, dia) {
  push();
  translate(x, y);

  let xOffset, yOffset;
  xOffset = cos(frameCount * 0.01) * dia*0.05;
  yOffset = sin(frameCount * 0.01) * dia*0.05;
  ellipse(xOffset, yOffset, dia*0.9, dia*0.9);
  ellipse(xOffset, yOffset, dia, dia);

  xOffset = cos(frameCount * 0.015) * dia*0.05;
  yOffset = sin(frameCount * 0.015) * dia*0.05;
  ellipse(xOffset, yOffset, dia*0.9, dia*0.9);
  ellipse(xOffset, yOffset, dia, dia);

  xOffset = cos(frameCount * 0.02) * dia*0.05;
  yOffset = sin(frameCount * 0.02) * dia*0.05;
  ellipse(xOffset, yOffset, dia*0.9, dia*0.9);
  ellipse(xOffset, yOffset, dia, dia);

  pop();
}
