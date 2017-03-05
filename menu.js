var c1;
var c2;
function preload() {
  c1 = loadImage("i1.png");
  c2 = loadImage("i2.png");
}
function setup() {
    createCanvas(300, 300);
    frameRate(24);
    loadPixels();
}

function clearBg()
{
  updatePixels();
}

var last;
function draw() {
    clearBg();
    fill(100, 100, 255);
    noStroke();
        ellipse(mouseX, mouseY,100, 100);
}
