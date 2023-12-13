let walk;
function preload(){
  
  walk = loadImage('walk.png')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  image(walk,0,0);
}