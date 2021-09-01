"use strict";

class Particle {
  constructor(x, y, z) {
    this.pos = createVector(x, y, z);
    this.vel = createVector(random(-0.1, 0.1), random(-0.1, 0.1), random(-0.1, 0.1));
    this.acc = createVector();
    this.rad = random(2, 5);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    //this.vel.limit(3);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    fill(255);
    box(3);
    pop();
  }
  applyForce(f) {
    let force = f.copy();
    this.acc.add( force );
  }
  applyNoise3D() {
    // get a noise value(range from -1 to 1) based on this particle's 3D position
    let noiseFreq = 0.01;
    let noiseValue = perlin.noise(
      (this.pos.x + frameCount) * noiseFreq,
      (this.pos.y + frameCount) * noiseFreq,
      (this.pos.z + frameCount) * noiseFreq
    );
    
    // In order to just create a swinging vector in 3D.
    // we need to map the value from 0 to 1 since the noise value can have a negative vlaue.
    let x = map(cos(frameCount * 0.02), -1, 1, 0, 1); 
    let y = map(sin(frameCount * 0.02), -1, 1, 0, 1); // a circular movement?
    let z = map(sin(frameCount * 0.027), -1, 1, 0, 1); // any arbitrary value
    let vector = createVector(x,y,z);
    
    // let's only get the direction
    vector.normalize(); 
    
    // apply the noise value to the direction
    // feel free to adjust the magnitude (0.01)
    vector.mult(noiseValue*0.01);
    
    // apply it as a force
    this.applyForce( vector );
  }
}