const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);


window.requestAnimationFrame(gameLoop);


function gameLoop () {
  if (game.isOver()) {
    console.log('Game Over');

  } else {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    game.animate();
  }


  window.requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}




