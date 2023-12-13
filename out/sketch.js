let walkk = [];
let currentFrame = 0;

function preload() {
  for (let i = 0; i < 10; i++) {
    let fileName = 'walkk' + i + '.png'; // Update the path
    walkk[i] = loadImage(fileName);
  }
}

function setup() {
  createCanvas(400, 400);
    frameRate(100); // Set the frame rate to 10 frames per second (adjust as needed)

}

function draw() {
  background(220);
  image(walkk[currentFrame], 0, 0);
  currentFrame++;
  if (currentFrame >= walkk.length) {
    currentFrame = 0;
  }
}
