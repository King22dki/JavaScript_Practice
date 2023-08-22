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

class Boundary {
  static width = 48;
  static height = 48;
  constructor({position}){
    this.position = position;
    this.width = 48;
    this.height = 48;
  }

  draw() {
    context.fillStyle = 'red';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const boundaries = [];
const offset = {
  x: -790,
  y: -400
}

collisionsMap.forEach((row, i) =>{
  row.forEach((symbol, j)=> {
    if(symbol === 1025)
    boundaries.push(
      new Boundary({
        position: {
          x: j * Boundary.width + offset.x,
          y: i * Boundary.height + offset.y
        }
      })
    )
  })
})
console.log(boundaries);

// Load an image to draw on the canvas
const image = new Image();
image.src = './img/Pokemon Style map 1.png';

// Player Image
const playerImage = new Image();
playerImage.src = './img/playerDown.png';

class Sprite {
  constructor({position, velocity, image, frames = {max:1}}) {
    this.position = position;
    this.image = image;
    this.frames = frames;

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max,
      this.height = this.image.width / this.frames.max
    }
  }
  draw () {
    context.drawImage(
      this.image,
      0,
      0,
      this.image.width/this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height 
      );
  }
}

const x2 = canvas.width / 2;
const y2 = canvas.height / 2;
const player = new Sprite({
  position: {
    x: x2 + 68 + playerImage.width / 3,
    y: y2
  },
  image: playerImage,
  frames: {
    max: 4
  } 
});

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
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
// Refactoring for movables
const movables = {background, boundaries};

// Creating an infinite loop for animate
function animate() {
  window.requestAnimationFrame(animate);
  
  // Draw the background image on the canvas
  background.draw();

  // Drawing in the boundaries
boundaries.forEach(boundary => {
  boundary.draw();
})
player.draw();

if (player.position.x + player.width >= boundary.position.x && player.position.x <=boundary.position.x + boundary.width)

  if (keys.w.pressed){
    movables.forEach((movable) =>{
      movable.position.y +=2
    })}
  else if (keys.s.pressed) {
    movables.forEach((movable) =>{
      movable.position.y -=2
    })}
  else if (keys.a.pressed) {
    movables.forEach((movable) =>{
      movable.position.x +=2
    })}
  else if (keys.d.pressed) {
    movables.forEach((movable) =>{
      movable.position.y -=2
    })}

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








