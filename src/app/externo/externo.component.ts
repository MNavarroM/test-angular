import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public users: Array<any>  = [];
  public date = new Date(1994, 1, 21);
  public user: any;

  constructor(private _route: ActivatedRoute,  private _router: Router ,private _peticionesService: PeticionesService) {

  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this._peticionesService.getUsers(id).subscribe(
      result=> {
        this.user = result.data;
        console.log(this.user)
      },
      error => {
        console.log("ERROR");
      }
    );
  }

}
