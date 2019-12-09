const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// define possible moves.
moves = {
  [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: p => ({ ...p, y: p.y + 1 })
};

// Calculate size of canvas.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
let board = new Board();

function play() {
  board.getEmptyBoard();
  let piece = new Piece(ctx);
  piece.draw();

  board.piece = piece;
}

document.addEventListener("keydown", event => {
  if (moves[event.keyCode]) {
    event.preventDefault();

    let p = moves[event.keyCode](board.piece);

    if (board.valid(p)) {
      board.piece.move(p);

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      board.piece.draw();
    }
  }
});
