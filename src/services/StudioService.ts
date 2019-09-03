import { Injectable } from '@angular/core';
import { Studio } from 'src/models/studio';
import { initalStudios } from 'src/models/dataStudios';


@Injectable()
export class StudioService {

  public studios: Array<Studio> = initalStudios;

  constructor() {

  }

  getStudios(): Array<Studio> {
    return this.studios;
  }

  getStudio(name: string): Studio {
    return this.studios.find(x => x.name === name);
  }

}

