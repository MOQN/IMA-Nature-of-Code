let flock1;
let flock2;

function setup() {
  createCanvas(1000, 600);
  flock1 = new Flock(100,100, 50, 10, 60);
  flock2 = new Flock(100,400, 100, 30, 40);
}

function draw() {
  background(0);
  
  flock1.run();
  flock2.run();
}