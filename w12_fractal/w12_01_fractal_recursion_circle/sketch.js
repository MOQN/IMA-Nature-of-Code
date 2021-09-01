function setup() {
  createCanvas(800,600);
  background(255);
  drawCircle(width/2, height/2, 500);
}

function draw() {
  noLoop();
}

function drawCircle(x, y, r) {
  ellipse(x, y, r, r);
  
  if (r > 10) {
    r = r * 3/4;
    // recursion: call the function inside the function!
    drawCircle(x, y, r);	 
  }				
}