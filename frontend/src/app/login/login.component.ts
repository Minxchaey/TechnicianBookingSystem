import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }
  submit() {
    const formData = this.form.getRawValue();

    const data = {
      email: formData.email,
      password: formData.password
    }
    console.log();

    this.http.post('http://localhost:8000/api/login', data).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.token);
        console.log(localStorage.getItem('token'));
        this.router.navigate(['/']);
      },
      error => {
        console.log('error');
        console.log(error);
      }
    );
  }
}


