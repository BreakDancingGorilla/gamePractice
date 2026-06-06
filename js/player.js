import { canvas } from "./main.js";

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
    { key: "ArrowLeft", dx: -1, dy: 0 },
    { key: "ArrowRight", dx: 1, dy: 0 },
    { key: "ArrowUp", dx: 0, dy: -1 },
    { key: "ArrowDown", dx: 0, dy: 1 },
    { key: "a", dx: -1, dy: 0 },
    { key: "d", dx: 1, dy: 0 },
    { key: "w", dx: 0, dy: -1 },
    { key: "s", dx: 0, dy: 1 },
  ];

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(keypressed) {
    this.actionKeys.forEach((action) => {
      if (keypressed.isDown(action.key)) {
        this.x += action.dx * this.speed;
        this.y += action.dy * this.speed;
      }
    });
  }
}
