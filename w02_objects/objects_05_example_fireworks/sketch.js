// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 17 2017


let NUM_OF_CIRCLES = 50;
let circles = [];


function setup() {
  createCanvas(600, 600);
  background(0);
  // create Circle object of quantity of NUM_OF_CIRCLES
  // and push them in the circles array
  for (let i = 0; i < NUM_OF_CIRCLES; i++) {
    circles.push(new Circle(width / 2, height, 0, -12));
  }
}


function draw() {
  // add transparency to create a trail
  background(0, 30);
  for (let i = 0; i < circles.length; i++) {
    circles[i].run();
  }
  fill(255);
  text("Press SpaceBar to change the sequence.", 10, 20);
  text("Press R to reset.", 10, 40);
}


function keyPressed() {
  print(key);
  // press space bar to change the sequence
  if (key == " ") {
    for (let i = 0; i < circles.length; i++) {
      circles[i].seq++;
    }
  } else if (key == "R") { // reset
    // to make the array empty again
    circles = [];
    // add circles again 
    for (let i = 0; i < NUM_OF_CIRCLES; i++) {
      circles.push(new Circle(width / 2, height, 0, -12));
    }
  }
}