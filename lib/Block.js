const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Block extends GamePiece {
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
};



// new instance created when specified length between first car/log and next car/log //
// Creating new instances for each object up to 'x' times per length
// will be running loops to infinitely create objects crossing the screen (Consider For loop)
// ** Must Create the objects Before we push it onto the array
//  --Display that array onto the canvas
// Phase II: .push() one object to the array

