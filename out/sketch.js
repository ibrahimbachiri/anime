let walkk = [];
let currentFrame = 0;
let lastFrameTime = 0;
let frameInterval = 100; // Set the desired frame interval in milliseconds

function preload() {
  for (let i = 0; i < 10; i++) {
    let fileName = 'walkk' + i + '.png';
    walkk[i] = loadImage(fileName);
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Check if enough time has passed since the last frame
  if (millis() - lastFrameTime > frameInterval) {
    // Display the current frame
    image(walkk[currentFrame], 0, 0);

    // Move to the next frame
    currentFrame++;

    // If we've reached the end of the frames, loop back to the beginning
    if (currentFrame >= walkk.length) {
      currentFrame = 0;
    }

    // Update the last frame time
    lastFrameTime = millis();
  }
}
