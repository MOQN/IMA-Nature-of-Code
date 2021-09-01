let ps = [];

function setup() {
  createCanvas(500, 600);
  background(0);

  for (let i = 0; i < 10; i++) {
    ps.push(new PSystem());
  }
}

function draw() {
  background(0);

  for (let i = 0; i < 10; i++) {
    ps[i].run(width / 2, height / 2);
  }
}