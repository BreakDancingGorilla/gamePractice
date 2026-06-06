import { ctx } from './main.js';

class player {
    constructor(x = ctx.width/2, y = ctx.height/2, width = 50, height = 50, color = '#00f5ff', speed = 5) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.speed = speed;
        this.height = height;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(keypressed) {
        if (keypressed['ArrowLeft']) {
            this.x -= this.speed;
        }
        if (keypressed['ArrowRight']) {
            this.x += this.speed;
        }
        if (keypressed['ArrowUp']) {
            this.y -= this.speed;
        }
        if (keypressed['ArrowDown']) {
            this.y += this.speed;
        }
    }
    
}