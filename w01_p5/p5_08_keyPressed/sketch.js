// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Sep 7 2017


// keyPressed() vs. keyTyped()

/** keyCode:
 * BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE,
 * SHIFT, CONTROL, OPTION, ALT,
 * UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
 **/


function setup() {
  createCanvas(500, 600);
  background(100);
}

function draw() {

}

// try keyTyped() and see the printed value of key.
function keyPressed() {  
  print(key);
  if (key == 'A') {
    background(random(255), random(255), random(255));
  }
  if (keyCode === LEFT_ARROW) {
    background(255);
  } else if (keyCode === ENTER) {
    background(0);
  }
}