// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 14 2017

let img;

function preload() {
  print("A");
  img = loadImage('image-large.png');
  print("B");
}

function setup() {
  createCanvas(600, 600);
  noStroke();
  print("C");
}

function draw() {
  background(0);
  
  print("D");
  if (img.width > 1) {
    print("E");
    noLoop();
  }
  image(img,0,0,width,height);
}