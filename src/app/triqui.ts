export class Triqui {
  private game: string[][];
  private turn = 'X';

  constructor() {
    this.game = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  send(x: number, y: number) {
    this.assignLetter(x, y);
    this.changeTurn();
  }

  private changeTurn() {
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }

  private assignLetter(x: number, y: number) {
    this.verifyOccupied(x, y);
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
