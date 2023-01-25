import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {

  }
  ngOnInit() {
    this.form = this.fb.group({
      name: '',
      age: '',
      birthdate: '',
      gender: '',
      email: '',
      phone: '',
      address: '',
      category: '',
      valid_id: '',
      password: '',
      password_confirmation: ''
    });

  }
  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json' })
  };
  submit(): Observable<any> {
    // const formData = this.form.getRawValue;

    const data ={
      name : "j",
      age: "21",
      birthdate: 'df',
      gender: 'fw',
      email: 'algadipej962@gmail.com',
      phone: '12345566',
      address: 'cc',
      category: 'cc',
      valid_id: 'dd',
      password: 'ddddd',


    }
    // console.log(data);
    return this.http.post('http://localhost:8000/api/register',data,this.httpOptions );
    // .subscribe(
    //   (result:any) => console.log(result),
    //   err => console.log(err)
    // );

  }

}
