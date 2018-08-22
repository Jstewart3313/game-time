module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = 1;
  }

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }




  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    );
  }


  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  autoMove() {
    this.x += this.dx * this.dxv;
    if ( this.x > 535) {
      this.x += -540;
    } else if (this.x < -40) {
      this.x =+ 500;
    }
    this.y += this.dy * this.dyv;
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  
  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
    this.y = direction.y + 10;
    this.x = direction.x;
  }

};