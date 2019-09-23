export class Triqui {
  private game: string[][];
  private turn = 'X';

  constructor() {
    this.game = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  send(x: number, y: number) {
    this.game[x][y] = this.turn;

    if (this.turn === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }

  getGame(): string[][] {
    return this.game;
  }

  getTurn(): string {
    return this.turn;
  }
}
