import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/services/GameService';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
  providers: [GameService]
})
export class GameDetailsComponent implements OnInit {

  public game: Game;

  constructor(public _route: ActivatedRoute, public _gameService: GameService) { }

  ngOnInit() {
    this.game = this._gameService.getGame(+this._route.snapshot.paramMap.get('id'));
  }

}
