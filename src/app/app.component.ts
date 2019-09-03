import { Component, OnDestroy } from '@angular/core';
import { conf } from '../models/conf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy{
  me = 'Mario';
  titulo = conf.titulo;
  public visible: boolean = true;

  ngOnDestroy(){
    alert('aaaa');
  }

  public hide(){
    this.visible = false;
  }

}


