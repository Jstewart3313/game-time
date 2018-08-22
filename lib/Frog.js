const GamePiece = require('./GamePiece');

//TEST

// extend GamePiece class
module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color, dx, dxv);

    this.borderColor = borderColor;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }



  resetGame() {
    this.x = 250;
    this.y = 470;
  }

  rideLog() {
    this.dx = this.blocks2.dx;
    this.dxv = this.blocks2.dxv;
  }

  // changeDirection(direction) {
  //   this.dx = direction.dx;
  //   this.dy = direction.dy;
  //   this.y = direction.y;
  //   this.x = direction.x;
  // }
};