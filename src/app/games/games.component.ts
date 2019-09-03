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

  removeGame(game: Game) {
    this.games.splice(this.games.indexOf(game), 1);
  }

  alerta($event) {
    alert($event);
  }

  enterPress() {
    alert('ENTER PRESS');
  }



}
