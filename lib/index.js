const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);


window.requestAnimationFrame(gameLoop);


function gameLoop () {
	if (game.isOver()) {
	} else if (game.roundOver || game.win) {
		updateScores();
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


function updateScores() {
	let lives = document.querySelector('.lives-js');
	lives.innerText = `Lives: ${game.frog.lives}`;
	let level = document.querySelector('.level-js');
	level.innerText = `Level: ${game.round}`;
	game.roundOver = false;
	game.win = false;
}















