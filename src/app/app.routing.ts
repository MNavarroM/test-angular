// Modulos para rutas
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes
import {GamesComponent} from './games/games.component';
import {StudiosComponent} from './studios/studios.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { RequestComponent } from './request/request.component';
import { TestPostComponent } from './test-post/test-post.component';

// Rutas

const appRoutes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'studios', component: StudiosComponent },
  { path: 'studios/:nombre', component: StudiosComponent },
  { path: 'users', component: RequestComponent },
  { path: 'post', component: TestPostComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

