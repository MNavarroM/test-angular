import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudioService } from 'src/services/StudioService';
import { Studio } from 'src/models/studio';

@Component({
  selector: 'studios',
  templateUrl: './studios.component.html',
  providers: [StudioService]
  // styleUrls: ['./studios.component.css'],
})
export class StudiosComponent implements OnInit {
  public studios: Array<Studio>;
  @Input() name: string;
  @Output() alertaEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor(private _studiosService: StudioService) {
    this.studios = _studiosService.getStudios();
  }

  ngOnInit() {
    //alert(this.name);
    /*this._route.params.subscribe((params: Params) => {
      console.log(params)
    });
    this._route.queryParams.subscribe(params => {
      console.log(params);
  });*/
    //console.log(this._route.snapshot.params);
  }

  public alertaName(name: string) {
    this.alertaEvent.emit(name);
  }

}
