/**
 * APPEL IN P5.js
 * - Please don't steal
**/


let appelLeft, appelRight, appelBackground, appelMusic
let playerX = 20
let playerY
let walkspeed = 5

function move() {
  playerX += walkspeed
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
  image(appelRight, playerX, 386)
  if (playerX > 800) {
   playerX = 20
  }
  move()
}
