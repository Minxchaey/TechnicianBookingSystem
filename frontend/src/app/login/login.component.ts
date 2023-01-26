import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  pass!: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private articleService: ArticleService) {
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }
  credentials: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Origin': '*'
    })
  };
  submit(email: string, password: string) {


    this.credentials = {
      'email': email,
      'password': password
    };
    this.pass = password;


    this.articleService.login1(this.credentials as any).subscribe(
      (result: any) => {
        if (result.token != null) {
          localStorage.setItem('token', result.token);
          console.log(localStorage.getItem('token'));
          this.router.navigate(['/home/2']);
        } else {
          this.articleService.login2(this.credentials as any).subscribe(
            (result: any) => {
              if (result.token != null) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('pass', this.pass);
                console.log(localStorage.getItem('token'));
                this.router.navigate(['/home/1']);

              } else {
                console.log('no account');
              }


            },
            error => {
              console.log('error');
              console.log(error);
            }
          );


        }

      },
      error => {
        console.log('error');
        console.log(error);
      }
    );

  }
}


