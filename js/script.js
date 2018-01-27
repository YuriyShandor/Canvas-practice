var firstCanvas = document.getElementById('firstCanvas');

//========== Full window width & height ==========

// firstCanvas.width = window.innerWidth;
// firstCanvas.height = window.innerHeight;

firstCanvas.width = 700;
firstCanvas.height = 500;

var c = firstCanvas.getContext('2d');

c.fillRect(100, 100, 150, 150);
c.fillRect(400, 400, 50, 50);
c.fillRect(300, 100, 100, 100);
