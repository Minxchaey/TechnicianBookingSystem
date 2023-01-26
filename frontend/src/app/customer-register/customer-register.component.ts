import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {

  }
  pass: any;
  cpass: any;
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required, Validators.min(18)],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required, Validators.minLength(11), Validators.maxLength(11)],
      address: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    },
      // {
      //   validators :this.passwordMatch('password', 'password_confirmation')
      // }

    );
    this.pass = this.form.controls['password'].value;
    this.cpass = this.form.controls['password_confirmation'].value;

  }

  passwordMatch(password: any, compassword: any) {

    return (formGroup: FormGroup) => {
      const password_c = formGroup.controls[password].value;
      const compassword_c = formGroup.controls[compassword].value;
      if (password_c !== compassword_c) {

      }
    };

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
  };
  submit() {
    const formData = this.form.controls;

    const data = {
      name: formData['name'].value,
      age: formData['age'].value,
      birthdate: formData['birthdate'].value,
      gender: formData['gender'].value,
      email: formData['email'].value,
      phone: formData['phone'].value,
      address: formData['address'].value,
      password: formData['password'].value,
      password_confirmation: formData['password_confirmation'].value,


    }
    // console.log(data);
    return this.http.post('http://localhost:8000/api/register/customer', data, this.httpOptions)
      .subscribe(
        () => {
          this.router.navigate(['/login'])
        },
        err => {
          console.log(err)
        }
      );

  }

}
