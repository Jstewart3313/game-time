const Block = require('./Block');
const Block2 = require('./Block2');
const Frog = require('./Frog');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.roundOver = false;


    this.frog = new Frog(250, 470, 15, 15, 'green', 0, 0, 'red');

    // const startingX = [0, 50, 150, 350, 450];

    // const position = Math.floor(Math.random() * 5)

    // const xPos = startingX[position]

    this.blocks = [

      // right to left objects
      new Block(0, 425, 20, 30, 'red', 1, 1, 'black'),
      new Block(50, 425, 10, 20, 'green', 1, 1, 'black'),
      new Block(150, 425, 20, 20, 'blue', 1, 1, 'black'),  
      new Block(350, 425, 20, 30, 'red', 1, 1, 'black'),
      new Block(450, 425, 10, 20, 'green', 1, 1, 'black'),

      new Block(0, 327, 20, 30, 'red', 1, 2, 'black'),
      new Block(50, 327, 10, 20, 'green', 1, 2, 'black'),
      new Block(150, 327, 20, 20, 'blue', 1, 2, 'black'), 
      new Block(250, 327, 20, 30, 'red', 1, 2, 'black'),
      new Block(350, 327, 10, 20, 'green', 1, 2, 'black'),
      new Block(450, 327, 10, 10, 'blue', 1, 2, 'black'),

      new Block(550, 375, 20, 40, 'red', -1, 1, 'black'),
      new Block(600, 375, 10, 20, 'green', -1, 1, 'black'),
      new Block(650, 375, 20, 20, 'blue', -1, 1, 'black'),  
      new Block(700, 375, 20, 40, 'red', -1, 1, 'black'),
      new Block(850, 375, 10, 20, 'green', -1, 1, 'black'),
      new Block(900, 375, 20, 20, 'blue', -1, 1, 'black'),

      new Block(550, 285, 20, 40, 'red', -1, 1, 'black'),
      new Block(600, 285, 10, 20, 'green', -1, 1, 'black'),
      new Block(650, 285, 20, 20, 'blue', -1, 1, 'black'),
      new Block(700, 285, 20, 40, 'red', -1, 1, 'black'),
      new Block(850, 285, 10, 20, 'green', -1, 1, 'black'),
      new Block(900, 285, 20, 20, 'blue', -1, 1, 'black'),
    ];
    // left to right objects

    this.blocks2 = [

      new Block2(0, 215, 30, 30, '#692602', 1, 1, 'black'),
      new Block2(50, 215, 30, 30, 'green', 1, 1, 'black'),
      new Block2(150, 215, 30, 10, 'blue', 1, 1, 'black'),
      new Block2(250, 215, 30, 30, '#692602', 1, 1, 'black'),
      new Block2(350, 215, 30, 30, 'green', 1, 1, 'black'),
      new Block2(450, 215, 30, 10, 'blue', 1, 1, 'black'),

      new Block2(0, 125, 50, 30, '#692602', 1, 2, 'black'),
      new Block2(50, 125, 50, 30, 'green', 1, 2, 'black'),
      new Block2(150, 125, 50, 10, 'blue', 1, 2, 'black'),      
      new Block2(250, 125, 50, 30, '#692602', 1, 2, 'black'),
      new Block2(350, 125, 50, 30, 'green', 1, 2, 'black'),
      new Block2(450, 125, 50, 10, 'blue', 1, 2, 'black'),

      new Block2(550, 175, 40, 40, '#692602', -1, 1, 'black'),
      new Block2(600, 175, 40, 30, 'green', -1, 1, 'black'),
      new Block2(650, 175, 40, 10, 'blue', -1, 1, 'black'),  
      new Block2(700, 175, 40, 40, '#692602', -1, 1, 'black'),
      new Block2(850, 175, 40, 30, 'green', -1, 1, 'black'),
      new Block2(900, 175, 40, 10, 'blue', -1, 1, 'black'), 

      new Block2(550, 57, 68, 40, '#692602', -1, 1, 'black'),
      new Block2(600, 57, 68, 30, 'green', -1, 1, 'black'),
      new Block2(650, 57, 68, 10, 'blue', -1, 1, 'black'),
      new Block2(700, 57, 68, 40, '#692602', -1, 1, 'black'),
      new Block2(850, 57, 68, 30, 'green', -1, 1, 'black'),
      new Block2(900, 57, 68, 10, 'blue', -1, 1, 'black'),
    ];
  }


  animate() {

    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      // if (block.isCollidingWithWall(720)) {
      //   block.autoMove();
      // } else {
        block.autoMove();
      // }

      block.draw(this.ctx);
    }); 

    this.blocks2.forEach( block2 => {
      // if (block2.isCollidingWithWall(720)) {
      //   block2.autoMove();
      // } else {
        block2.autoMove();
      // }

      block2.draw(this.ctx);
    });

    this.blocks.forEach( block => {
      if (block.isCollidingWith(this.frog)) {
        this.checkStatus(this.frog);
      } 
    });

    const collidingBlock = this.blocks2.find( block2 => {
      return block2.isCollidingWith(this.frog);
    });

    if (collidingBlock != undefined && this.frog.y <= 225) {
      this.frog.dxv = collidingBlock.dxv;
      this.frog.dx = collidingBlock.dx;
      this.frog.move();

    } else if (collidingBlock === undefined && this.frog.y <= 225) {
      this.checkStatus(this.frog);
    }

    this.frog.draw(this.ctx);
      
    if (this.frog.isCollidingWithWall(canvas.width, canvas.height)) {
      this.checkStatus(this.frog);
    } else if (this.frog.y <= 50) this.levelUp();
  }

  endGame() {
    this.gameOver = true;
  }

  checkStatus(frog) {
    if( frog.lives >= 1) frog.death();
      else this.endGame();
      console.log(frog.lives);
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  startOver(frog) {
    this.frog.x = 250;
    this.frog.y = 470;
    this.roundOver = true;
  }


  levelUp() {
      let round = 5;
      this.round ++;
      this.startOver();
      this.addSpeed();
      console.log(levelHTML);
      console.log(round);
    }


  addSpeed() {
    this.blocks.forEach( block => block.dxv++);
    this.blocks2.forEach( block => block.dxv++);

  }

  handleKeyPress(e) {
    const direction = {
      x: 0,
      y: 0
    };

    if (e.key === 'ArrowRight') {
      this.frog.x += 10;

    } else if (e.key === 'ArrowLeft') {
      this.frog.x += -10;

    } else if (e.key === 'ArrowDown') {
      this.frog.y += 10;

    } else if (e.key === 'ArrowUp') {
      this.frog.y += -10;
    } 

  }


 
};