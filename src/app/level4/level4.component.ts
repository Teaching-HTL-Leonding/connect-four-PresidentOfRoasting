import { Component } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css'],
})
export class Level4Component {
  public currentPlayerIndex = 1;

  boardContent!: number[][];
  constructor(public board: BoardService) {
    this.boardContent = this.board.boardContent
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



  // TODO: Enhance solution from level 3 by extracting the logic in a separate Angular service.
}
