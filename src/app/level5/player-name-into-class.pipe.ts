import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerNameIntoClass'
})
export class PlayerNameIntoClassPipe implements PipeTransform {

  transform(player: String, ...args: unknown[]): String {
    return `occupied-${player}`;
  }

}
