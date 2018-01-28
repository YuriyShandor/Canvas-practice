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
  x: undefined,
  y: undefined
};

var maxRadius = 40;

interCanvas.addEventListener('mousemove', function(event) {
  interMouse.x = event.x - (((window.innerWidth - interCanvas.width) / 2) + 9);
  interMouse.y = event.y - (((window.innerHeight - interCanvas.height) / 2) - 9);
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
    if (this.x + this.radius > interCanvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    };

    if (this.y + this.radius > interCanvas.height || this.y - this.radius < 0) {
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
