import { Component } from '@angular/core';
import { BoardService } from '../level4/board.service';

@Component({
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.css'],
})
export class Level5Component {

  // TODO: Enhance solution from level 4 by using Angular pipes
  public currentPlayerIndex = 1;

  boardContent!: number[][];
  constructor(public board: BoardService) {
    this.restart();
  }

  public restart(): void {
    this.board.restart();
    this.boardContent=this.board.boardContent
    this.currentPlayerIndex=1;
  }

  public drop(colIx: number) {
    if (!this.board.winnerIndex) {
      let freeRow = this.board.getFreeRow(colIx);
      if (freeRow !== -1) {
        this.boardContent[freeRow][colIx] = this.board.currentPlayerIndex;

        this.board.winnerIndex = this.board.getWinnerIndex();
        this.board.currentPlayerIndex = this.board.currentPlayerIndex === 1 ? 2 : 1;
      }
    }
  }
}
