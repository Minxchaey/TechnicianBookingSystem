import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-customer',
  templateUrl: './nav-customer.component.html',
  styleUrls: ['./nav-customer.component.css']
})
export class NavCustomerComponent implements OnInit {
  loggedIn = false;
  constructor(private http: HttpClient, private router: Router) {

  }
 ngOnInit(){
    this.loggedIn = localStorage.getItem('token')!== null;
  }

  logOut(){
    localStorage.removeItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    this.http.post('http://localhost:8000/api/customer/logout', { headers: headers });
    localStorage.removeItem('token');
    localStorage.removeItem('pass');
    this.router.navigate(['/']);
  }

}
