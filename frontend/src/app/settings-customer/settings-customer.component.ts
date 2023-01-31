import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-settings-customer',
  templateUrl: './settings-customer.component.html',
  styleUrls: ['./settings-customer.component.css']
})
export class SettingsCustomerComponent implements OnInit {
  user: any;
  passkey!: any;
  @ViewChild('account') acc!: ElementRef;
  @ViewChild('password') pass!: ElementRef;
  @ViewChild('removeaccount') d_acc!: ElementRef;
  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService, private http: HttpClient, @Inject(DOCUMENT) document: Document) { }
  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    this.http.get('http://localhost:8000/api/user', { headers: headers }).subscribe(
      result => this.user = result
    );
    this.passkey = localStorage.getItem('pass');


  }

  changePage(index: number) {
    if (index == 1) {
      this.acc.nativeElement.style.display = 'block';
      this.pass.nativeElement.style.display = 'none';
      this.d_acc.nativeElement.style.display = 'none';



    }
    else if (index == 2) {
      this.acc.nativeElement.style.display = 'none';
      this.pass.nativeElement.style.display = 'block';
      this.d_acc.nativeElement.style.display = 'none';

    }
    else if (index == 3) {
      this.acc.nativeElement.style.display = 'none';
      this.pass.nativeElement.style.display = 'none';
      this.d_acc.nativeElement.style.display = 'block';

    }
  }
}
