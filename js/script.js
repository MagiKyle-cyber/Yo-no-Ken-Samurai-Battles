// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html

const canvas = document.querySelector('canvas'); // Selects the <canvas> element from the HTML
const c = canvas.getContext('2d'); // Gets the 2D drawing context for the canvas

function resizeCanvas() { // Defines a function to resize and fill the canvas
  canvas.width = window.innerWidth; // Sets the canvas width to the window's width
  canvas.height = window.innerHeight; // Sets the canvas height to the window's height
  c.fillStyle = 'black'; // Sets the fill color to black
  c.fillRect(0, 0, canvas.width, canvas.height); // Draws a filled rectangle covering the entire canvas
}

const gravity = 0.2; // Defines a constant for gravity
// Defines a Sprite class to represent a drawable object
class Sprite {
    constructor({ position, velocity }) { // Constructor takes a position and velocity object as a parameter
        this.position = position; // Stores the position (with x and y properties) in the instance
        this.velocity = velocity;
        this.height = 150; // Sets the height of the sprite
    }

    draw() { // Method to draw the sprite on the canvas
      c.fillStyle = 'red'; // Sets the fill color to red
      c.fillRect(this.position.x, this.position.y, 50, this.height); // Draws a filled rectangle at the sprite's position (x, y) with width 50 and height 150
    }

    update() { // Method to update the sprite's position based on its velocity
        this.draw(); // Calls the draw method to render the sprite
        this.position.y += this.velocity.y; // Updates the y position by adding the y velocity

        if (this.position.y + this.height + this.velocity.y >= canvas.height) { // Checks if the sprite is at the bottom of the canvas
            this.velocity.y = 0; // Stops the sprite's downward movement
        } else this.velocity.y += gravity; // Applies gravity to the sprite's velocity
    }
}

// Creates a new Sprite instance called 'player' at position (0, 0)
const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
});

// Creates another Sprite instance called 'enemy' at position (400, 100)
const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
});

console.log(player); // Logs the player object to the console for debugging

function animate() {
    window.requestAnimationFrame(animate); // Requests the next animation frame
    resizeCanvas(); // Redraws the background
    player.update(); // Updates the player sprite
    enemy.update(); // Updates the enemy sprite
}

animate(); // Calls the animate function to start the animation loop

window.addEventListener('resize', resizeCanvas); // Calls the function again whenever the window is resized
