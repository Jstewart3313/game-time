const { assert } = require('chai');
const Game = require ('../lib/Game');
const ctx = {
	canvas: {
		width: 300,
		height: 300
	}
};

describe('Game', () => {
	it('should end the game if block collides with wall', () => {
		// const game = new Game(ctx);
		// const block = game.block[0];

		// block = ctx.canvas.width;

		// game.handleBlock();


		// })
		it('should take properties', () => {});
		it('should collide with walls', () => {});
		it('should be able to move', () => {});
		it('should be able to changeDirection', () => {});
	});
});

// describe('Block', () => {
//  it('Should instantiate a new Block object',() => {
//    const block = new Block(50, 50, 10, 10, 'green', 'white');
//  })
// })
// let block1;
//
//   beforeEach(() => {
//   block1 = new Block (30, 30, 10, 10, 'green')
// })