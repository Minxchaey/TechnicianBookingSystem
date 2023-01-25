import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user:any;
     constructor(private  http:HttpClient){

     }
     ngOnInit() {
          const headers = new HttpHeaders({
            'Authorization' :`Bearer ${localStorage.getItem('token')}`
          });

          this.http.get('http://localhost:8000/api/user',{headers:headers}).subscribe(
            result=>this.user = result
          );

     }
}
