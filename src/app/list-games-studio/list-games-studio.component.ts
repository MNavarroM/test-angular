import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/services/GameService';
import { Game } from 'src/models/game';
import { Studio } from 'src/models/studio';

@Component({
  selector: 'list-games-studio',
  templateUrl: './list-games-studio.component.html',
  styleUrls: ['./list-games-studio.component.css'],
  providers : [GameService]
})
export class ListGamesStudioComponent implements OnInit {

  @Input() public studio: Studio;
  public games: Array<Game> = [];

  constructor(public _gameService: GameService) {

   }

  ngOnInit() {
    this.games = this._gameService.getGamesByStudio(this.studio);
  }

}
