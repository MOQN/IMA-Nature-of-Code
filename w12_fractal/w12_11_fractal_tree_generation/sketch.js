let BRANCH_ANGLE;
let joints = [];
let branches = [];


function setup() {
  createCanvas(800, 600);
  background(255);

  BRANCH_ANGLE = PI / 6;

  let start = createVector(width / 2, height)
  joints.push(start);
  branch(start, 0, 150, 0);
}

function draw() {
  background(0);

  for (let i = 0; i < branches.length; i++) {
    branches[i].display();

  }
  // for (let i = 0; i < joints.length; i++) {
  //   fill(255, 0, 0);
  //   noStroke();
  //   text(i, joints[i].x, joints[i].y);
  // }
  for (let i = 0; i < branches.length; i++) {
    fill(255, 255, 0);
    noStroke();
    text(branches[i].generation, branches[i].vecTo.x, branches[i].vecTo.y);
  }
  noLoop();
}


function branch(from, angle, len, generation) {
  let vector = p5.Vector.fromAngle(angle - PI / 2).setMag(len);
  let to = p5.Vector.add(from, vector);
  joints.push(to);
  let thickness = map(len, 0, 200, 1, 30);

  // display
  strokeWeight(thickness);
  stroke(0);
  line(from.x, from.y, to.x, to.y);

  // add a branch object
  branches.push(new Branch(from, to, thickness, generation));

  // create new branches
  len = len * 2 / 3 * random(0.7, 1.3); //***

  if (len > 10) {
    let angle1 = BRANCH_ANGLE + angle + random(-0.5, 0.5);
    branch(to, angle1, len, generation + 1);

    let angle2 = -BRANCH_ANGLE + angle + random(-0.5, 0.5);
    branch(to, angle2, len, generation + 1);
  }
}