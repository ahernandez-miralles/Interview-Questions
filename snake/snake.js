const KEY_CODES = {
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  SPACE: 32,
  UP_ARROW: 38
};

const GRID_HEIGHT = 50;
const GRID_WIDTH = 60;
const BLOCK_DIM = 10;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const block = {
  x: Math.floor(GRID_WIDTH / 2),
  y: Math.floor(GRID_HEIGHT / 2),
  dx: 1,
  dy: 0
};

const drawBlock = ({ x, y }) => {
  ctx.beginPath();
  ctx.rect(x * BLOCK_DIM, y * BLOCK_DIM, BLOCK_DIM, BLOCK_DIM);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
};

const draw = () => {
  drawBlock(block);
};

const update = () => {
  block.x += block.dx;
  block.y += block.dy;
};

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  update();
};

document.addEventListener('keydown', ({ keyCode }) => {
  switch(keyCode) {
    case KEY_CODES.UP_ARROW:
      block.dx = 0;
      block.dy = -1;
      break;

    case KEY_CODES.DOWN_ARROW:
      block.dx = 0;
      block.dy = 1;
      break;

    case KEY_CODES.LEFT_ARROW:
      block.dx = -1;
      block.dy = 0;
      break;

    case KEY_CODES.RIGHT_ARROW:
      block.dx = 1;
      block.dy = 0;
      break;
  }
});

setInterval(gameLoop, 100);
