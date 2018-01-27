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

animateCanvas.width = 700;
animateCanvas.height = 500;

// function Circle() {
//   this.x = x;
//   this.y = y;
//
//   this.draw = function() {
//     console.log('hello');
//   }
// };
//
// var circle = new Circle();
//
// circle.draw();

var aniCan = animateCanvas.getContext('2d');

var aniCan_x = Math.random() * animateCanvas.width;
var aniCan_y = Math.random() * animateCanvas.height;
var aniCan_radius = 30;
var aniCan_dx = 4;
var aniCan_dy = 4;

function animate() {
  requestAnimationFrame(animate);
  aniCan.clearRect(0, 0, animateCanvas.width, animateCanvas.height);

  aniCan.beginPath();
  aniCan.arc(aniCan_x, aniCan_y, aniCan_radius, 0, Math.PI * 2, false);
  aniCan.strokeStyle = "red";
  aniCan.lineWidth = 5;
  aniCan.stroke();

  if(aniCan_x + aniCan_radius > animateCanvas.width || aniCan_x - aniCan_radius < 0) {
    aniCan_dx = -aniCan_dx;
  };

  if(aniCan_y + aniCan_radius > animateCanvas.height || aniCan_y - aniCan_radius < 0) {
    aniCan_dy = -aniCan_dy;
  };

  aniCan_x += aniCan_dx;
  aniCan_y += aniCan_dy;
};

animate();
