import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { StudiosComponent } from './studios/studios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { ListGamesStudioComponent } from './list-games-studio/list-games-studio.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { RequestComponent } from './request/request.component';
import { TestPostComponent } from './test-post/test-post.component';



@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    StudiosComponent,
    ListGamesStudioComponent,
    GameDetailsComponent,
    RequestComponent,
    TestPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
