let branches = [];
let joints = [];

function setup() {
  createCanvas(500, 600);

  joints.push(createVector(width / 2, height));
  joints.push(createVector(width / 2, height * 2 / 3));
  joints.push(createVector(width / 2 - 100, height * 1 / 3));
  joints.push(createVector(width / 2 + 100, height * 1 / 3));

  branches.push(new Branch(joints[0], joints[1], 4));
  branches.push(new Branch(joints[1], joints[2], 2));
  branches.push(new Branch(joints[1], joints[3], 2));
}

function draw() {
  background(0);

  // this should be interesting!
  joints[1].x = mouseX;
  joints[1].y = mouseY;

  for (let i = 0; i < branches.length; i++) {
    let b = branches[i];
    b.display();
  }

}