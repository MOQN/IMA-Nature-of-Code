// JSON
let params = {
  debugMode: false,
  diameter: 200,
  vibrationAmp: 5
};

let gui = new dat.gui.GUI();
gui.add(params, "debugMode");
gui.add(params, "diameter").min(100).max(300).step(10);
gui.add(params, "vibrationAmp", 5, 10, 1);



let x, y;

function setup() {
  createCanvas(500, 600);
  background(0);

  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);

  //
  if (!params.debugMode) {
    fill(255, 150);
    noStroke();
  } else {
    stroke(255);
    noFill();
  }
  
  let vX = random(-params.vibrationAmp, params.vibrationAmp);
  let vY = random(-params.vibrationAmp, params.vibrationAmp);
  ellipse(x + vX, y + vY, params.diameter, params.diameter);
  
  fill(255);
  text( round(frameRate()), 10, 20);
}





