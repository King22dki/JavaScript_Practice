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

// Player Image
const playerImage = new Image();
playerImage.src = './img/playerDown.png'; // Fix the typo here

// Ensure the images are fully loaded before drawing
image.onload = () => {
  // Draw the background image on the canvas at the specified position (x, y)
  const x = -850; // Adjust these values as needed
  const y = -300; // Adjust these values as needed
  context.drawImage(image, x, y);

  // Draw the player image on the canvas at the specified position (x, y)
  context.drawImage(playerImage, canvas.width/2, canvas.height/2);
};
