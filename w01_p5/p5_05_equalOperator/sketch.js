// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Sep 7 2017


// equal operator
// == vs. ===


let number = 10;

function setup() {
  createCanvas(500,600);
  background(100);
  
  print(10 == '10');
  print(10 === '10');
  print(10 === number);
}

function draw() {
  
}