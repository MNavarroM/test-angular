// Modulos para rutas
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes
import {GamesComponent} from './games/games.component';
import {StudiosComponent} from './studios/studios.component';
import {ExternoComponent} from './externo/externo.component';
import { GameDetailsComponent } from './game-details/game-details.component';

// Rutas

const appRoutes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'studios', component: StudiosComponent },
  { path: 'studios/:nombre', component: StudiosComponent },
  { path: 'externo/:id', component: ExternoComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

