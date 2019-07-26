var win;
var tank;
var shots = [];

// Initial Setup
function setup() {
  rectMode(CENTER);
  win = { width: 800, height: 800 };
  createCanvas(win.width, win.height);

  let startPos = createVector(Math.floor(win.width/2), Math.floor(win.height/2));
  this.tank = new Tank(startPos, color(255, 204, 0));
  
}
  
// Draw the screen and process the position updates
function draw() {
  background(0);

  // Process shots
  for (var i = shots.length - 1; i >= 0; i--) {
    shots[i].render();
    shots[i].update();
    if (shots[i].offscreen()) {
      shots.splice(i, 1);
    }
  }
  // Process the tanks
  this.tank.render();
  this.tank.turn();
  this.tank.update();
  }

  // Press a Key
  function keyPressed() {
    if (key == ' ') {
      shots.push(new Shot(this.tank.pos, this.tank.heading, this.tank.tankColor));
    } else if (keyCode == RIGHT_ARROW) {
      this.tank.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
      this.tank.setRotation(-0.1);
    } else if (keyCode == UP_ARROW) {
      this.tank.moveForward(1.0);
    } else if (keyCode == DOWN_ARROW) {
      this.tank.moveForward(-1.0);
    }
  }

  // Release Key
  function keyReleased() {
    this.tank.setRotation(0);
    this.tank.stopMotion();
  }

  