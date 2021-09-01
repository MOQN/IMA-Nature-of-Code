let x = 0;

function setup() {
  createCanvas(900, 600);
  background(0);
}

function draw() {
  background(0);
  x = lerp(x, width, 0.1);
  let y = height / 2;
  ellipse(x, y, 30, 30);

}