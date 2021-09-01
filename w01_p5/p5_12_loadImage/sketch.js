// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 14 2017

let img;

function setup() {
  createCanvas(600, 600);
  noStroke();
  print("A");
  img = loadImage('image-large.png');
  print("B");
}

function draw() {
  background(0);
  
  print("C");
  if (img.width > 1) {
    print("D");
    noLoop();
  }
  image(img,0,0,width,height);
}

