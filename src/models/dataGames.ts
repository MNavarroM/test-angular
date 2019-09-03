import { Game } from './game';
import { initalStudios } from './dataStudios';

export let initialGames: Array<Game> = [
  new Game(0, 'Fallout New Vegas', 15, 'RPG con ambientación post apocalíptica',
  initalStudios.find(x => x.id === 1), '../assets/fallout.jpg',['rpg', 'adventure']),
  new Game(1, 'Prey', 45, 'Aventura espacial con toques de rpg y crafteo',
  initalStudios.find(x => x.id === 0), '../assets/prey.jpg', ['rpg', 'adventure', 'shooter']),
  new Game(2, 'Pillars of Eternity', 45, 'Aventura fantástica medieval de manos de Obsidian, de corte añejo',
  initalStudios.find(x => x.id === 1), '../assets/pillars.jpg', ['rpg', 'adventure', 'tactical rpg']),
]
