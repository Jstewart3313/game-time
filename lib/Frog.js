const GamePiece = require('./GamePiece');



module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color, dx, dxv);

    this.borderColor = borderColor;
    this.lives = 5;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  death() {
    this.x = 250;
    this.y = 470;
    this.lives --;
  }

  rideLog(log) {
    this.dx = this.blocks2.dx;
    this.dxv = this.blocks2.dxv;
  }

};