
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatRadioModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatRadioModule,
    // Forms
    FormsModule
  ],
  declarations: []
})
export class MaterialFormsModule { }
