// Get the canvas element from the HTML
const canvas = document.querySelector('canvas');

// Get the 2D drawing context for the canvas
const context = canvas.getContext('2d');

// Set the dimensions of the canvas
canvas.width = 1024;
canvas.height = 576;

// 
const collisionsMap = [];
for(let i = 0; i < collisions.length; i+=70){
  collisionsMap.push(collisions.slice(i, 70 + i));
};

// Load an image to draw on the canvas
const image = new Image();
image.src = './img/Pokemon Style map 1.png';

// Player Image
const playerImage = new Image();
playerImage.src = './img/playerDown.png';

class Sprite {
  constructor({position, velocity, image}) {
    this.position = position;
  }
  draw () {
    context.drawImage(image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: {
    x: -790,
    y: -400
  },
  image: image
});

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
  
};

// Creating an infinite loop for animate
function animate() {
  window.requestAnimationFrame(animate);
  
  // Draw the background image on the canvas
  background.draw();

  // Draw the player image on the canvas with cropping and adjustments
  const x2 = canvas.width / 2;
  const y2 = canvas.height / 2;
  context.drawImage(
    playerImage,
    // Cropping beginning
    0, // crop position
    0, // crop position
    playerImage.width / 4,
    playerImage.height,
    // Actual Image - End of cropping
    x2 + playerImage.width / 3,
    y2,
    playerImage.width / 4,
    playerImage.height
  );

  if (keys.w.pressed) background.position.y += 2;
  else if (keys.s.pressed) background.position.y -= 2;
  else if (keys.a.pressed) background.position.x += 2;
  else if (keys.d.pressed) background.position.x -= 2;

}

// Start the animation loop
animate();

// Listen for keydown events
let lastKey = '';
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed  = true;
      lastKey = 'w';
      break;
    case 'a':
      keys.a.pressed = true;
      lastKey = 'a';
      break;
    case 's':
      keys.s.pressed = true;
      lastKey = 's';
      break;
    case 'd':
      keys.d.pressed = true;
      lastKey = 'd';
      break;
  }
});

// Listen for keyup events
window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
  }
});



