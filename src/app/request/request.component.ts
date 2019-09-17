import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [RequestService]
})
export class RequestComponent implements OnInit {

  public users: Array<any> = [];

  constructor(private requestService: RequestService) {

  }

  ngOnInit() {
    // Me susbcribo al observable para obtener los datos de la api
    this.requestService.getUsers().subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, error => {

    });
    /*this.requestService.post().subscribe(result => {
      //this.users = result;
      console.log(result);
    }, error => {

    });*/
  }

}
