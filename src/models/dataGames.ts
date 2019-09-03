import { Game } from './game';
import { initalStudios } from './dataStudios';

export let initialGames: Array<Game> = [
  new Game(0, 'Fallout New Vegas', 15, initalStudios.find(x => x.id === 1), ['rpg', 'adventure']),
  new Game(1, 'Prey', 45, initalStudios.find(x => x.id === 0), ['rpg', 'adventure', 'shooter']),
  new Game(2, 'Pillars of Eternity', 45, initalStudios.find(x => x.id === 1), ['rpg', 'adventure', 'tactical rpg']),
]
