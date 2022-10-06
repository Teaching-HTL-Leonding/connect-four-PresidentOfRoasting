import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

export interface BoardCell {
  /**
   * Player (X or O) occupying the cell, empty string if the cell is empty.
   */
  playerName: string;

  /**
   * CSS class of the player occupying the cell, empty string if the cell is empty.
   */
  class: string;
}

@Component({
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css'],
})
export class Level3Component extends Level2Component {
  constructor() {
    super();
    this.restart();
  }

  public override restart(): void {
    super.restart();
    this.boardContent = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
  }

  protected override getWinnerIndex(): number {
    //horizontal
    for (let i = 0; i < this.boardContent.length; i++) {
      for (let j = 0; j < this.boardContent[i].length - 3; j++) {
        if (
          this.boardContent[i][j] !== 0 &&
          this.boardContent[i][j] === this.boardContent[i][j + 1] &&
          this.boardContent[i][j] === this.boardContent[i][j + 2] &&
          this.boardContent[i][j] === this.boardContent[i][j + 3]
        ) {
          return this.boardContent[i][j];
        }
      }
    }

    //vertical
    for (let i = 0; i < this.boardContent.length - 3; i++) {
      for (let j = 0; j < this.boardContent[i].length; j++) {
        if (
          this.boardContent[i][j] !== 0 &&
          this.boardContent[i][j] === this.boardContent[i + 1][j] &&
          this.boardContent[i][j] === this.boardContent[i + 2][j] &&
          this.boardContent[i][j] === this.boardContent[i + 3][j]
        ) {
          return this.boardContent[i][j];
        }
      }
    }

    //left to right
    for (let i = 0; i < this.boardContent.length - 3; i++) {
      console.log(this.boardContent);
      for (let j = 0; j < this.boardContent[i].length - 3; j++) {
        if (
          this.boardContent[i][j] !== 0 &&
          this.boardContent[i][j] === this.boardContent[i + 1][j + 1] &&
          this.boardContent[i][j] === this.boardContent[i + 2][j + 2] &&
          this.boardContent[i][j] === this.boardContent[i + 3][j + 3]
        ) {
          return this.boardContent[i][j];
        }
      }
    }

    //right to left
    for (let i = 0; i < this.boardContent.length - 3; i++) {
      for (let j = 3; j < this.boardContent[i].length; j++) {
        if (
          this.boardContent[i][j] !== 0 &&
          this.boardContent[i][j] === this.boardContent[i + 1][j - 1] &&
          this.boardContent[i][j] === this.boardContent[i + 2][j - 2] &&
          this.boardContent[i][j] === this.boardContent[i + 3][j - 3]
        ) {
          return this.boardContent[i][j];
        }
      }
    }

    return 0;
  }
}
