// Get the canvas element from the HTML
const canvas = document.querySelector('canvas');

// Get the 2D drawing context for the canvas
const context = canvas.getContext('2d');

// Set the dimensions of the canvas
canvas.width = 1024;
canvas.height = 576;

// Log the canvas element for debugging
console.log(canvas);

// Fill the canvas with a white background
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

// Load an image to draw on the canvas
const image = new Image();
image.src = './img/Pokemon Style map 1.png';
image.onload = () => {
  // Draw the background image on the canvas
  context.drawImage(image, -790, -400);
};

// Player Image
const playerImage = new Image();
playerImage.src = './img/playerDown.png';
playerImage.onload = () => {
  // Draw the player image on the canvas
  const x2 = canvas.width / 2;
  const y2 = canvas.height / 2;
  context.drawImage(
    playerImage,
    // Cropping beginning
    0,
    0,
    playerImage.width/4,
    playerImage.height,
    // Actual Image - End of cropping
    x2, 
    y2,
    playerImage.width/4,
    playerImage.height);
  console.log('Player Image drawn at:', x2, y2);
};

