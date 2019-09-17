import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-test-post',
  templateUrl: './test-post.component.html',
  styleUrls: ['./test-post.component.css'],
  providers: [RequestService]
})
export class TestPostComponent implements OnInit {

  public formJSON: FormGroup;

  constructor(private requestService: RequestService, private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {

  }

  buildForm() {
    this.formJSON = this.formBuilder.group({
      userId : [Math.trunc(Math.random() * 100), [Validators.required]],
      id : [Math.trunc(Math.random() * 100), [Validators.required]],
      title : ['', [Validators.required]],
      body : ['', [Validators.required]],
    });
  }

  post() {
    let json = {
      userId : this.formJSON.controls.userId.value,
      id : this.formJSON.controls.id.value,
      title : this.formJSON.controls.title.value,
      body : this.formJSON.controls.body.value
    }
    this.requestService.post(json).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

}
