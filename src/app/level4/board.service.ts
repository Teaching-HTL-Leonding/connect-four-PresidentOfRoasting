import { Injectable } from '@angular/core';

/**
 * Logic for a connect-four-board.
 */
@Injectable({
  providedIn: 'root',
})
export class BoardService {

  private currentWinnerIx = 0;
  public currentPlayerIndex = 1;
  private playerNames = ['', 'X', 'O'];

  boardContent!:number[][];

  public get winnerIndex(): number {
    return this.currentWinnerIx;
  }

  public set winnerIndex(winnerIndex:number)  {
    this.currentWinnerIx = winnerIndex;
  }

  public getStyle(rowIX: number, colIX: number) {
    return this.playerIndexToClass(this.boardContent[rowIX][colIX]);
  }

  private playerIndexToClass(playerIx: number): string {
    if (playerIx !== 0) {
      return `occupied-${playerIx}`;
    }

    return '';
  }

  public restart(): void {
    this.currentWinnerIx = 0;
    this.boardContent = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.currentPlayerIndex = 1;
  }

  public getFreeRow(colIx: number): number {
    for (let index = 0; index < this.boardContent.length; index++) {
      if (!this.boardContent[index][colIx]) {
        if (
          index === this.boardContent.length - 1 ||
          (index + 1 < this.boardContent[index].length &&
            this.boardContent[index + 1][colIx] !== 0)
        ) {
          return index;
        }
      }
    }
    return -1;
  }

  public getWinningPlayerName(): string {
    return this.playerNames[this.currentWinnerIx];
  }

  public  getWinnerIndex(): number {
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
