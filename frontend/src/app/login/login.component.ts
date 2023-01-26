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


    // return this.http.post<any>(this.url+ `/api/customer`,customer, this.httpOptions);



    // this.http.post<any>('http://localhost:8000/api/login', this.credentials,this.httpOptions).subscribe(
    //   (result: any) => {
    //     localStorage.setItem('token', result.token);
    //     console.log(localStorage.getItem('token'));
    //     this.router.navigate(['/']);
    //   },
    //   error => {
    //     console.log('error');
    //     console.log(error);
    //   }
    // );

    this.articleService.login(this.credentials as any).subscribe(
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


