/**
 * APPEL IN P5.js
 * - Please don't steal
**/


let appelLeft, appelRight, appelBackground, appelMusic
let playerX = 20
let playerY
let walkspeed = 3.4
let facing = 'right'
function move(side) {
  if (side == 'right') {
    playerX += walkspeed
  } else if (side == 'left') {
    playerX -= walkspeed
  }
}

function jump() {
  for (let i = 0; i < 10; i++) {
    playerY += 0.1
  }
  for (let i = 0; i < 10; i++) {
    playerY -= 0.1
  }
}

function preload() {
  appelLeft = loadImage("assets/appelLeft.png")
  appelRight = loadImage("assets/appelRight.png")
  appelBackground = loadImage("assets/appelBackground.png")
  appelMusic = loadSound("assets/appelMusic.mp3")
}

function setup() {
  createCanvas(800, 600);
  appelMusic.play()
  userStartAudio();
}

function draw() {
  background(appelBackground);
  if (facing == 'right') {
    image(appelRight, playerX, 386)
  } else if (facing == 'left') {
    image(appelLeft, playerX, 386)
  }
  if (keyIsPressed) {
    if (key == 'd') {
      facing = 'right'
      move(facing)
    } else if (key == 'a') {
      facing = 'left'
      move(facing)
    }
  }
}


