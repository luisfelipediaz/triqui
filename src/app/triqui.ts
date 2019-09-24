export class Triqui {
  private game: string[][];

  constructor(private turn = 'X') {
    this.game = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  send(x: number, y: number): string {
    this.verifyOccupied(x, y);
    this.assignLetter(x, y);
    this.changeTurn();

    return this.whoWon();
  }

  private whoWon(): string {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.game.length; index++) {
      if (this.game[index][0] !== '' && this.game[index][0] === this.game[index][1] && this.game[index][1] === this.game[index][2]) {
        return this.game[index][0];
      }
    }

    for (let index = 0; index < this.game.length; index++) {
      if (this.game[0][index] !== '' && this.game[0][index] === this.game[1][index] && this.game[1][index] === this.game[2][index]) {
        return this.game[0][index];
      }
    }

    if (this.game[0][0] !== '' && this.game[0][0] === this.game[1][1] && this.game[1][1] === this.game[2][2]) {
      return this.game[0][0];
    }

    if (this.game[0][2] !== '' && this.game[0][2] === this.game[1][1] && this.game[1][1] === this.game[2][0]) {
      return this.game[0][2];
    }
  }

  private changeTurn() {
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }

  private assignLetter(x: number, y: number) {
    this.game[x][y] = this.turn;
  }

  private verifyOccupied(x: number, y: number) {
    if (this.isOccupied(x, y)) {
      throw new Error(`Celda no disponible ${x}, ${y}`);
    }
  }

  private isOccupied(x: number, y: number) {
    return this.game[x][y] !== '';
  }

  getGame(): string[][] {
    return this.game;
  }

  getTurn(): string {
    return this.turn;
  }
}
