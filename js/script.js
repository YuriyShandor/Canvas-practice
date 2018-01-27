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
    if (this.x + this.radius > animateCanvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    };

    if (this.y + this.radius > animateCanvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    };

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
};

var circleArray = [];

for (var i=0; i<50; i++) {
  var x = Math.random() * (animateCanvas.width - radius * 2) + radius;
  var y = Math.random() * (animateCanvas.height - radius * 2) + radius;
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
