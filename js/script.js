//============== First canvas =====================

var firstCanvas = document.getElementById('firstCanvas');

//========== Full window width & height ==========

// firstCanvas.width = window.innerWidth;
// firstCanvas.height = window.innerHeight;

firstCanvas.width = 700;
firstCanvas.height = 500;

var c = firstCanvas.getContext('2d');

//========== Rectangles ==========

//c.fillRect(x, y, width, height);

c.fillStyle = "green";
c.fillRect(100, 100, 150, 150);
c.fillRect(400, 400, 50, 50);
c.fillStyle = "blue";
c.fillRect(300, 100, 100, 100);

//========== Lines ==========

c.beginPath();
c.moveTo(50, 350); //beggin
c.lineTo(500, 200);
c.lineTo(530, 300);
c.strokeStyle = "red";
c.stroke();

//============= Arc / Cidcle =============

//c.ark(x, y, r, sAngle, eAngle);

c.beginPath();
c.arc(600, 75, 50, 0, Math.PI * 2, false);
c.strokeStyle = "#000";
c.stroke();

for(var i=0; i<10; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;

  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "red";
  c.stroke();
}

//=============== Animating canvas ============

var animateCanvas = document.getElementById('animateCanvas');
var aniCan = animateCanvas.getContext('2d');

animateCanvas.width = 900;
animateCanvas.height = 600;

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    aniCan.beginPath();
    aniCan.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    aniCan.strokeStyle = "red";
    aniCan.lineWidth = 5;
    aniCan.stroke();
    aniCan.fill();
  };

  this.move = function() {
    if (this.x + this.radius + 5 > animateCanvas.width || this.x - this.radius - 5 < 0) {
      this.dx = -this.dx;
    };

    if (this.y + this.radius + 5 > animateCanvas.height || this.y - this.radius - 5 < 0) {
      this.dy = -this.dy;
    };

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
};

var circleArray = [];

for (var i=0; i<50; i++) {
  var x = Math.random() * (animateCanvas.width - (radius + 5) * 2) + radius + 5;
  var y = Math.random() * (animateCanvas.height - (radius + 5) * 2) + radius + 5;
  var radius = 30;
  var dx = (Math.random() - 0.5) * 7;
  var dy = (Math.random() - 0.5) * 7;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  aniCan.clearRect(0, 0, animateCanvas.width, animateCanvas.height);

  for (var i=0; i < circleArray.length; i++) {
    circleArray[i].move();
  };
};

animate();

// var aniCan_x = Math.random() * animateCanvas.width;
// var aniCan_y = Math.random() * animateCanvas.height;
// var aniCan_radius = 30;
// var aniCan_dx = 4;
// var aniCan_dy = 4;
//
// function animate() {
//   requestAnimationFrame(animate);
//   aniCan.clearRect(0, 0, animateCanvas.width, animateCanvas.height);
//
//   aniCan.beginPath();
//   aniCan.arc(aniCan_x, aniCan_y, aniCan_radius, 0, Math.PI * 2, false);
//   aniCan.strokeStyle = "red";
//   aniCan.lineWidth = 5;
//   aniCan.stroke();
//
//   if(aniCan_x + aniCan_radius > animateCanvas.width || aniCan_x - aniCan_radius < 0) {
//     aniCan_dx = -aniCan_dx;
//   };
//
//   if(aniCan_y + aniCan_radius > animateCanvas.height || aniCan_y - aniCan_radius < 0) {
//     aniCan_dy = -aniCan_dy;
//   };
//
//   aniCan_x += aniCan_dx;
//   aniCan_y += aniCan_dy;
// };
//
// animate();

//==================== Interactin with canvas =================

var interCanvas = document.getElementById('interCanvas');
var interCan = interCanvas.getContext('2d');

interCanvas.width = 900;
interCanvas.height = 600;

var interMouse = {
  x: interCanvas.width / 2,
  y: interCanvas.height / 2
};

var maxRadius = 40;

interCanvas.addEventListener('mousemove', function(event) {
  interMouse.x = event.x - ((window.innerWidth - interCanvas.width) / 2) + 9;
  interMouse.y = event.y - ((window.innerHeight - interCanvas.height) / 2) - 22;
});

var interCircleColor = [ '#f44336', '#e91e63', '#9c27b0', '#b71c1c',
 '#4a148c', '#311b92', '#1a237e', '#1976d2', '#0d47a1', '#03a9f4',
 '#00bcd4', '#004d40', '#4caf50', '#8bc34a', '#cddc39', '#76ff03',
  '#e65100', '#424242', '#4e342e', '#000000'
];

function CircleInter(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = interCircleColor[Math.floor(Math.random() * interCircleColor.length)]

  this.draw = function() {
    interCan.beginPath();
    interCan.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    interCan.fillStyle = this.color;
    interCan.fill();
  };

  this.move = function() {
    if (this.x + this.radius + this.dx > interCanvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    };

    if (this.y + this.radius + this.dy > interCanvas.height || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    };

    this.x += this.dx;
    this.y += this.dy;

    // Add Interactivity

    if (interMouse.x - this.x < 50 && interMouse.x - this.x > -50 && interMouse.y - this.y < 50 && interMouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 2;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 2;
    }

    this.draw();
  };
};

var circleArrayInter = [];

for (var i=0; i<500; i++) {
  var x = Math.random() * (interCanvas.width - radius * 2) + radius;
  var y = Math.random() * (interCanvas.height - radius * 2) + radius;
  var radius = Math.random() * 3 + 2;
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;

  circleArrayInter.push(new CircleInter(x, y, dx, dy, radius));
}

function animateInter() {
  requestAnimationFrame(animateInter);
  interCan.clearRect(0, 0, interCanvas.width, interCanvas.height);

  for (var i=0; i < circleArrayInter.length; i++) {
    circleArrayInter[i].move();
  };
};

animateInter();

//=============== Gravity effect with canvas ============

var gravityCanvas = document.getElementById('gravityCanvas');
var gravityCan = gravityCanvas.getContext('2d');

gravityCanvas.width = 900;
gravityCanvas.height = 600;

var gravityValue = 1;
var frictionValue = 0.99;

function Ball(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    gravityCan.beginPath();
    gravityCan.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    gravityCan.fillStyle = "red";
    gravityCan.fill();
    gravityCan.strokeStyle = "#000";
    gravityCan.lineWidth = 5;
    gravityCan.stroke();
  };

  this.move = function() {
    if (this.x + this.radius + this.dx > gravityCanvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    };

    if (this.y + this.radius + this.dy > gravityCanvas.height) {
      this.dy = -this.dy * frictionValue;
    } else {
      this.dy += gravityValue;
    };

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
};

var ballArr = [];

for (var i=0; i<30; i++) {
  var x = Math.random() * (gravityCanvas.width - radius * 2 - 5) + radius;
  var y = Math.random() * (gravityCanvas.height - radius * 2 - 5) + radius;
  var radius = 30;
  var dx = (Math.random() - 0.5) * 7;
  var dy = (Math.random() - 0.5) * 7;

  ballArr.push(new Ball(x, y, dx, dy, radius));
}

function gravityBall() {
  requestAnimationFrame(gravityBall);
  gravityCan.clearRect(0, 0, gravityCanvas.width, gravityCanvas.height);

  for (var i=0; i < ballArr.length; i++) {
    ballArr[i].move();
  };
};

gravityBall();

//=============== Circular moution with canvas ============

var circularCanvas = document.getElementById('circularCanvas');
var circCan = circularCanvas.getContext('2d');

circularCanvas.width = 900;
circularCanvas.height = 600;

// for interactivity
// var circularMouseMove = {
//   x: undefined,
//   y: undefined
// };
//
// circularCanvas.addEventListener('mousemove', function(event) {
//   circularMouseMove.x = event.x - ((window.innerWidth - circularCanvas.width) / 2) + 7;
//   circularMouseMove.y = event.y - ((window.innerHeight - circularCanvas.height) / 2) - 5;
// });

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function Particle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.05;
  this.distance = randomIntFromRange(100, 150);
  //this.lastMouse = {x: x, y: y};

  this.draw = function(lastPoint) {
    circCan.beginPath();
    circCan.strokeStyle = 'blue';
    circCan.lineWidth = this.radius;
    circCan.moveTo(lastPoint.x, lastPoint.y);
    circCan.lineTo(this.x, this.y);
    circCan.stroke();
    circCan.closePath();
  };

  this.move = function() {
    var lastPoint = {x: this.x, y: this.y};

    // this.lastMouse.x += (circularMouseMove.x - this.lastMouse.x) * 0.05;
    // this.lastMouse.y += (circularMouseMove.y - this.lastMouse.y) * 0.05;

    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * this.distance;
    this.y = y + Math.sin(this.radians) * this.distance;

    this.draw(lastPoint);
  };
};

function Particle3D(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.05;
  this.distance = {x: randomIntFromRange(100, 150), y: randomIntFromRange(100, 150)}

  this.draw = function() {
    circCan.beginPath();
    circCan.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    circCan.fillStyle = "blue";
    circCan.fill();
  };

  this.move = function() {
    // Cull move from left to right

    // this.radians += this.velocity;
    // this.x = x + Math.cos(this.radians) * 100;

    // Diagonal move
    // +++++++
    //this.y = y + Math.cos(this.radians) * 100;

    this.radians -= this.velocity;
    this.x = x + Math.cos(this.radians) * this.distance.x;
    this.y = y + Math.sin(this.radians) * this.distance.y;

    this.draw();
  };
};

var particleArr = [];

for (var i=0; i<130; i++) {
  var x = 200;
  var y = circularCanvas.height / 2;
  var radius = Math.random() * 2 + 3;

  particleArr.push(new Particle(x, y, radius));
}

var particle3DArr = [];

for (var i=0; i<75; i++) {
  var x = 700;
  var y = circularCanvas.height / 2;
  var radius = 5;

  particle3DArr.push(new Particle3D(x, y, radius));
}

function circularMotion() {
  requestAnimationFrame(circularMotion);
  circCan.fillStyle = 'rgba(255, 255, 255, 0.05)';
  circCan.fillRect(0, 0, 200, circularCanvas.height);
  circCan.clearRect(200, 0, 700, circularCanvas.height);

  for (var i=0; i < particleArr.length; i++) {
    particleArr[i].move();
  };

  for (var i=0; i < particle3DArr.length; i++) {
    particle3DArr[i].move();
  };
};

circularMotion();


//=============== Simple collision detection with canvas ============

var scdCanvas = document.getElementById('scdCanvas');
var scdCan = scdCanvas.getContext('2d');

scdCanvas.width = 900;
scdCanvas.height = 600;

var scdMouseMove = {
  x: 100,
  y: 100
};

scdCanvas.addEventListener('mousemove', function(event) {
  scdMouseMove.x = event.x - ((window.innerWidth - scdCanvas.width) / 2) + 7;
  scdMouseMove.y = event.y - ((window.innerHeight - scdCanvas.height) / 2) - 5;
});

function getDistance (x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function SCDBall(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    scdCan.beginPath();
    scdCan.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    scdCan.fillStyle = this.color;
    scdCan.fill();
  };

  this.move = function() {
    this.draw();
  };
};

var smBall = new SCDBall(200, 200, 25, 'red');

var lgBall = new SCDBall(450, 300, 75, 'green');

function scdBalls() {
  requestAnimationFrame(scdBalls);
  scdCan.clearRect(0, 0, scdCanvas.width, scdCanvas.height);

  lgBall.move();

  smBall.x = scdMouseMove.x;
  smBall.y = scdMouseMove.y;
  smBall.move();

  if (getDistance(lgBall.x, lgBall.y, smBall.x, smBall.y) < lgBall.radius + smBall.radius) {
    lgBall.color = 'black';
  } else {
    lgBall.color = 'green'
  };
};

scdBalls();

//=============== More interesting collision detection with canvas ============

var cdCanvas = document.getElementById('cdCanvas');
var cdCan = cdCanvas.getContext('2d');

cdCanvas.width = 900;
cdCanvas.height = 600;

var cdMouseMove = {
  x: cdCanvas.width / 2,
  y: cdCanvas.height / 2
};

cdCanvas.addEventListener('mousemove', function(event) {
  cdMouseMove.x = event.x - ((window.innerWidth - cdCanvas.width) / 2) + 7;
  cdMouseMove.y = event.y - ((window.innerHeight - cdCanvas.height) / 2) - 5;
});

function rotate(velocity, angle) {
  var rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
};

function resolveCollision (particle, otherParticle) {
  var xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  var yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  var xDist = otherParticle.x - particle.x;
  var yDist = otherParticle.y - particle.y;

  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between two colliding particles
    var angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

    var m1 = particle.mass;
    var m2 = otherParticle.mass;

    //Velocity before equation
    var u1 = rotate(particle.velocity, angle);
    var u2 = rotate(otherParticle.velocity, angle);

    //Velocity after first collision equation
    var v1 = {x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y};
    var v2 = {x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y};

    //Final velocity after rotating axis back to original location
    var vFinal1 = rotate(v1, -angle);
    var vFinal2 = rotate(v2, -angle);

    //swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;
    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}

function CDBall(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.velocity = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5
  };
  this.radius = radius;
  this.color = color;
  this.mass = 1;
  this.opacity = 0;

  this.draw = function() {
    cdCan.beginPath();
    cdCan.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    cdCan.save();
    cdCan.globalAlpha = this.opacity;
    cdCan.fillStyle = this.color;
    cdCan.fill();
    cdCan.restore();
    cdCan.strokeStyle = this.color;
    cdCan.stroke();
  };

  this.move = function(cdBallsArr) {
    this.draw();

    for (var i=0; i<cdBallsArr.length; i++) {
      if (this === cdBallsArr[i]) continue;
      if (getDistance(this.x, this.y, cdBallsArr[i].x, cdBallsArr[i].y) - this.radius * 2 < 0) {
        resolveCollision(this, cdBallsArr[i]);
      }
    }

    if (this.x - this.radius <= 0 || this.x + this.radius >= cdCanvas.width) {
      this.velocity.x = -this.velocity.x;
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= cdCanvas.height) {
      this.velocity.y = -this.velocity.y;
    }

    //Interactivity
    if (getDistance(cdMouseMove.x, cdMouseMove.y, this.x, this.y,) < 75) {
      this.opacity += 0.05;
    } else {
      this.opacity -= 0.05;
      this.opacity = Math.max(0, this.opacity);
    };

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };
};

var cdBallsArr = [];

var cdBallsColors = ['#304ffe', '#00695c', '#03a9f4', '#4caf50', '#cddc39'];

for (var i=0; i<250; i++) {
  var color = cdBallsColors[Math.floor(Math.random() * cdBallsColors.length)];
  var radius = 15;
  var x = randomIntFromRange(radius, cdCanvas.width - radius);
  var y = randomIntFromRange(radius, cdCanvas.height - radius);

  if (i != 0) {
    for (var j=0; j<cdBallsArr.length; j++) {
      if (getDistance(x, y, cdBallsArr[j].x, cdBallsArr[j].y) - radius * 2 < 0) {
        var x = randomIntFromRange(radius, cdCanvas.width - radius);
        var y = randomIntFromRange(radius, cdCanvas.height - radius);

        j = -1;
      };
    };
  };

  cdBallsArr.push(new CDBall(x, y, radius, color));
};

function cdBalls() {
  requestAnimationFrame(cdBalls);
  cdCan.clearRect(0, 0, cdCanvas.width, cdCanvas.height);

  for (var i=0; i<cdBallsArr.length; i++) {
    cdBallsArr[i].move(cdBallsArr);
  }
};

cdBalls();
