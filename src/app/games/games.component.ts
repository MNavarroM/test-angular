import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/GameService';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  providers: [GameService],
   styleUrls: ['./games.component.css']
})
export class GamesComponent {

  public games: Array<Game> = [];


  constructor(private _gamesService: GameService) {
    this.games = _gamesService.getGames();
  }

  addGame() {

  }

  deleteGame(game: Game): void {
    this._gamesService.deleteGame(game);
  }

  alerta($event) {
    alert($event);
  }

  enterPress() {
    alert('ENTER PRESS');
  }

}
