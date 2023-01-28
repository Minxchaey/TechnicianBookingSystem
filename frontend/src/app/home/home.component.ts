import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  user: any;
  loggedIn = false;
  scheds: any;

  constructor(private http: HttpClient, private router: Router, private articleService: ArticleService, private fb: FormBuilder) {

  }
  ngOnInit() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    this.http.get('http://localhost:8000/api/user', { headers: headers }).subscribe(
      result => {
        this.user = result;
        this.articleService.showSchedules(Number(this.user.id)).subscribe(
          res => {
            this.scheds = res;
          });
      }
    );






    this.loggedIn = localStorage.getItem('token') !== null;




  }
  scheds_data: any;
  add(desc: string, startD: string, endD: string, startT: string, endT: string) {

    this.scheds_data = {
      'technician_account_id': Number(this.user.id),
      'description': desc,
      'date_started': startD,
      'date_ended': endD,
      'time_started': startT,
      'time_ended': endT
    };
    this.articleService.addSchedules(this.scheds_data as any).subscribe(sched => {
      this.scheds_data = sched;
      console.log(this.scheds_data);
      console.log("successfully added!");
    });

    window.location.reload();
  }
  concernss_data: any;
  addConcern(message: string) {
    this.scheds_data = {
      'technician_account_id': Number(this.user.id),
      'message': message
    };

    this.articleService.addFeedbacks(this.concernss_data as any).subscribe(feed => {
      this.concernss_data = feed;
      console.log(this.concernss_data);
      console.log("successfully added!");
    });
  }

  logOut() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    this.http.post('http://localhost:8000/api/technician/logout', { headers: headers });
    localStorage.removeItem('token');
    localStorage.removeItem('pass');
    this.router.navigate(['/']);


  }
}
