import { canvas } from "./main.js";
import { input } from "./input.js";

class Player {
  constructor(
    x = canvas.width / 2,
    y = canvas.height / 2,
    width = 50,
    height = 50,
    color = "#00f5ff",
    speed = 5,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.speed = speed;
    this.height = height;
    this.color = color;
  }

  //actionKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown' , 'a', 'd', 'w', 's'];
  actionKeys = [
    { key: "ArrowLeft", dx: -this.speed, dy: 0 },
    { key: "ArrowRight", dx: this.speed, dy: 0 },
    { key: "ArrowUp", dx: 0, dy: -this.speed },
    { key: "ArrowDown", dx: 0, dy: this.speed },
    { key: "a", dx: -this.speed, dy: 0 },
    { key: "d", dx: this.speed, dy: 0 },
    { key: "w", dx: 0, dy: -this.speed },
    { key: "s", dx: 0, dy: this.speed },
  ];

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    ///For each grabs the key, dx, dy, of every object in the actionkeys arrays.
                              ////these are the parameteters of the anymous arrow function 
    this.actionKeys.forEach(({ key, dx, dy }) => {
      ///isDown is a method in our input object, we pass the current key.
      if (input.isDown(key)) {
        ///Then use the dx and dy parameters to update the players x and y position.
        this.x += dx;
        this.y += dy;
      }
    });
  }
}

export const player = new Player();