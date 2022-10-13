import { Component } from '@angular/core';

@Component({
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
})
export class Level2Component {
  public boardContent!: number[][];

  public currentPlayerIndex = 1;

  private playerNames = ['', 'X', 'O'];

  private currentWinnerIx = 0;

  constructor() {
    this.restart();
  }

  public get winnerIndex(): number {
    return this.currentWinnerIx;
  }

  public drop(colIx: number) {
    if (!this.currentWinnerIx) {
      let freeRow = this.getFreeRow(colIx);
      if (freeRow !== -1) {
        this.boardContent[freeRow][colIx] = this.currentPlayerIndex;

        this.currentWinnerIx = this.getWinnerIndex();
        this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
      }
    }
  }

  private getFreeRow(colIx: number): number {
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

  public restart(): void {
    this.currentWinnerIx = 0;
    this.boardContent = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.currentPlayerIndex = 1;
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

  protected getWinnerIndex(): number {
    for (let i = 0; i < 4; i++) {
      if (
        this.boardContent[i][0] !== 0 &&
        this.boardContent[i][0] === this.boardContent[i][1] &&
        this.boardContent[i][0] === this.boardContent[i][2] &&
        this.boardContent[i][0] === this.boardContent[i][3]
      ) {
        return this.currentPlayerIndex;
      }

      if (
        this.boardContent[0][i] !== 0 &&
        this.boardContent[0][i] === this.boardContent[1][i] &&
        this.boardContent[0][i] === this.boardContent[2][i] &&
        this.boardContent[0][i] === this.boardContent[3][i]
      ) {
        return this.currentPlayerIndex;
      }
    }

    if (
      this.boardContent[0][0] !== 0 &&
      this.boardContent[0][0] === this.boardContent[1][1] &&
      this.boardContent[0][0] === this.boardContent[2][2] &&
      this.boardContent[0][0] === this.boardContent[3][3]
    ) {
      return this.currentPlayerIndex;
    }

    if (
      this.boardContent[0][3] !== 0 &&
      this.boardContent[0][3] === this.boardContent[1][2] &&
      this.boardContent[0][3] === this.boardContent[2][1] &&
      this.boardContent[0][3] === this.boardContent[3][0]
    ) {
      return this.currentPlayerIndex;
    }

    return 0;
  }

  public getWinningPlayerName(): string {
    return this.playerNames[this.currentWinnerIx];
  }
}
