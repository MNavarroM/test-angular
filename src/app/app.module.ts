import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { StudiosComponent } from './studios/studios.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ExternoComponent } from './externo/externo.component';
import { FormGameComponent } from './form-game/form-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material';
import { SharedModule } from 'src/shared/shared.module';
import { ListGamesStudioComponent } from './list-games-studio/list-games-studio.component';
import { GameDetailsComponent } from './game-details/game-details.component';



@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    StudiosComponent,
    PlatformsComponent,
    ExternoComponent,
    FormGameComponent,
    ListGamesStudioComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
