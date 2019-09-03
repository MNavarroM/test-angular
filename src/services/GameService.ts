import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { initialGames } from '../models/dataGames';
import { Studio } from 'src/models/studio';

@Injectable()
export class GameService {

  public games: Array<Game> = [];

  constructor() {
    this.games = initialGames;
  }

  getGamesByStudio(studio: Studio): Array<Game> {
    return this.games.filter(x => x.studio === studio);
  }

  getGame(id: number): Game {
    return this.games.find(x => x.id === id);
  }

  getGames(): Array<Game> {
    return this.games;
  }

}

