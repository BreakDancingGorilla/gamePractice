
export const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

import {player} from './player.js';
import {input} from './input.js';


window.addEventListener('load', () => {




canvas.width = 1000;
canvas.height = 500;



///Replace this with requestanimation frame and take notes on how it works. 

while (true) { 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    player.draw(ctx);
}

});