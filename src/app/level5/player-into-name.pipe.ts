import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName'
})
export class PlayerIntoNamePipe implements PipeTransform {

  private playerNames = ['', 'X', 'O'];
  transform(player: number, ...args: unknown[]): String {
    if(player>2||player<0){
      throw new Error("Invalid Player");
    }
    else{
      return this.playerNames[player];
    }
  }

}
