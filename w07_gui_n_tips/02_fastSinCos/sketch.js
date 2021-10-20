"use strict";

let cosArray = [];
let sinArray = [];
let sinCosResolution = 360 * 1;

function setup() {
  createCanvas(500, 600);
  background(0);
  noStroke();

  for (let i = 0; i < sinCosResolution; i++) {
    let angle = map(i, 0, sinCosResolution, 0, TWO_PI);
    cosArray.push(cos(angle));
    sinArray.push(sin(angle));
  }
}

function draw() {
  //background(0);

  noStroke();
  fill(255);
  let x, y;

  x = frameCount % width;
  y = 200 + sin(frameCount * 0.01) * 150;
  ellipse(x, y, 3, 3);

  y = 400 + mSin(frameCount * 0.01) * 150;
  ellipse(x, y, 3, 3);
}

function mSin(radian) {
  let angle = radian % TWO_PI;
  if (angle < 0) angle += TWO_PI;
  let index = floor(map(angle, 0, TWO_PI, 0, sinCosResolution));
  return sinArray[index];
}

function mCos(radian) {
  let angle = radian % TWO_PI;
  if (angle < 0) angle += TWO_PI;
  let index = floor(map(angle, 0, TWO_PI, 0, sinCosResolution));
  return cosArray[index];
}