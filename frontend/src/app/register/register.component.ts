import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  pass : any;
  cpass :any;
  ngOnInit() {
    this.form = this.fb.group({
    name: ['',Validators.required],
    age: ['',Validators.required, Validators.min(18)],
    birthdate: ['',Validators.required],
    gender: ['',Validators.required],
    email: ['',Validators.required, Validators.email],
    phone: ['',Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    address: ['',Validators.required],
    category: ['',Validators.required],
    valid_id: ['',Validators.required],
    password: ['',Validators.required],
    password_confirmation:['',Validators.required]
  },
  {
    validators :this.passwordMatch('password', 'password_confirmation')
  }

  );
  this.pass = this.form.controls['password'].value;
  this.cpass = this.form.controls['password_confirmation'].value;

  }

  passwordMatch(password: any, compassword:any){
   
    return (formGroup: FormGroup)=> {
      const password_c = formGroup.controls[password].value;
      const compassword_c = formGroup.controls[compassword].value;
      if (password_c !== compassword_c){

      }
    };

  }

  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json' })
  };
  submit(){
    const formData = this.form.controls;

    const data ={
      name : formData['name'].value,
      age: formData['age'].value,
      birthdate: formData['birthdate'].value,
      gender: formData['gender'].value,
      email:formData['email'].value,
      phone: formData['phone'].value,
      address: formData['address'].value,
      category: formData['category'].value,
      valid_id: formData['valid_id'].value,
      password: formData['password'].value,
      password_confirmation: formData['password_confirmation'].value,


    }
    // console.log(data);
    return this.http.post('http://localhost:8000/api/register',data,this.httpOptions )
    .subscribe(
      (result:any) => console.log(result),
      err => console.log(err)
    );

  }

}
