export class Triqui {
  private game: string[][];
  private turn = 'X';

  constructor() {
    this.game = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  send(x: number, y: number): string {
    this.verifyOccupied(x, y);
    this.assignLetter(x, y);
    this.changeTurn();

    return this.whoWon();
  }

  private whoWon(): string {
    if (this.game[0][0] === 'X' && this.game[0][1] === 'X' && this.game[0][2] === 'X') {
      return 'X';
    }

    return 'O';
  }

  private changeTurn() {
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }

  private assignLetter(x: number, y: number) {
    this.game[x][y] = this.turn;
  }

  private verifyOccupied(x: number, y: number) {
    if (this.isOccupied(x, y)) {
      throw new Error('Celda no disponible');
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
