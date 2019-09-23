export class Triqui {
  private game: string[][];

  constructor() {
    this.game = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  marcar(arg0: number, arg1: number) {
    this.game[arg0][arg1] = 'X';
  }

  getGame(): string[][] {
    return this.game;
  }
}
