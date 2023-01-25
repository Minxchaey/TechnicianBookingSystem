import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn = false;

  ngOnInit(){
    this.loggedIn = localStorage.getItem('token')!== null;
  }

  logOut(){
    localStorage.removeItem('token');
  }

}
