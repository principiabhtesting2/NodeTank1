
var tankWidth = 20;
var tankHeight = 30;

// A Tank Class
function Tank(startPos, tankColor) {
    this.pos = startPos.copy();
    this.r = 20;
    this.heading = 0;
    this.rotation = 0;
    this.vel = createVector(0, 0);
    this.isBoosting = false;
    this.destroyed = false;
    this.tankColor = tankColor;

    // For an optional boost feature
    this.boosting = function(b) {
      this.isBoosting = b;
    }
  
    this.boost = function() {
      var force = p5.Vector.fromAngle(this.heading);
      this.vel.add(force);
    }

    // Render - to render the tank to the screen
    this.render = function() {

        push();

        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2);
        
        // Draw Tank
        fill(this.tankColor);
        rect(0, 0, tankWidth, tankHeight);
        ellipse(0, -3, 14, 18);
        rect(0, -10, 4, 20);

        pop();
    }

    // Moving tank
    this.moveForward = function(a) {
      var force = p5.Vector.fromAngle(this.heading);
      force.mult(a);
      this.vel.add(force);
    }

    this.stopMotion = function() {
      this.vel.x = 0;
      this.vel.y = 0;
      this.vel.z = 0;
    }

    this.setRotation = function(a) {
        this.rotation = a;
    }
    
    this.turn = function() {
        this.heading += this.rotation;
    }

    // Update its forward and backward motion
    this.update = function() {
      if (this.isBoosting) {
        this.boost();
      }
      this.pos.add(this.vel);
    }
}