// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 14 2017

let circles = [];

function setup() {
  createCanvas(500, 600);
  
  for (let i = 0; i < 10; i++) {
    //initialize values of variables
    //for each iteration
    let x = width / 2;
    let y = 0;
    let dia = random(20, 30);
    let xspd = random(-4, 4);
    let yspd = random(2, 5);
    //create a new Circle object
    //and push it to the circles array
    circles.push( new Circle(x,y,dia,xspd, yspd) );
  }
}

function draw() {
  background(0);

  //for each Circle object in circles array
  for (let i = 0; i < circles.length; i++) {
    //update x and y positions
    circles[i].x += circles[i].xspd;
    circles[i].y += circles[i].yspd;
    //and draw the ellipse
    ellipse(circles[i].x, circles[i].y, circles[i].dia);
  }
}

//Now that there is a Circles class,
//you don't need to maintain a seperate array for each of the attributes
function Circle(x,y,dia,xspd, yspd) {
  this.x = x;
  this.y = y;
  this.dia = dia;
  this.xspd = xspd;
  this.yspd = yspd;
}




//