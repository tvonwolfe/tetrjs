class Board {
  grid;

  reset() {
    this.grid = this.getEmptyBoard();
  }

  getEmptyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          this.isEmpty(value) || (this.insideWalls(x) && this.aboveFloor(y))
        );
      });
    });
  }
}
