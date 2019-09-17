import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [MaterialModule, MDBBootstrapModule]
})
export class SharedModule { }
