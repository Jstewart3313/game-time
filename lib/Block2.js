const GamePiece = require('./GamePiece');


module.exports = class Block2 extends GamePiece {
	constructor(x, y, height, width, color, dx, dxv, borderColor) {

		super(x, y, height, width, color, dx, dxv);

		this.borderColor = borderColor;
	} 

	draw(ctx) {
		const {x, y, height, width, borderColor } = this;

		super.draw(ctx);


		ctx.strokeStyle = borderColor;
		ctx.strokeRect(x, y, width, height);
	}
};