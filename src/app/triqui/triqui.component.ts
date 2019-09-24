import { Component, OnInit } from '@angular/core';
import { Triqui } from '../triqui';

@Component({
  selector: 'app-triqui',
  templateUrl: './triqui.component.html',
  styleUrls: ['./triqui.component.css']
})
export class TriquiComponent {
  game: Triqui;
  playerWin: string;

  constructor() {
    this.game = new Triqui();
  }

  send(x: number, y: number) {
    this.playerWin = this.game.send(x, y);
  }

  reset() {
    this.game = new Triqui();
    this.playerWin = undefined;
  }
}
