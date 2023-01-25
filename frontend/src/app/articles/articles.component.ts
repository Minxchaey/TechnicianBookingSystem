import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(private articlesService: ArticleService, private router: Router) {}
  customers: any;
  showCustomers() {
    this.customers = this.articlesService
      .listCustomers()
      .subscribe((customer) => {
        this.customers = customer;
        console.log(this.customers);
      });
  }

  deleteCustomer(id: any) {
    this.articlesService.deleteCustomer(id).subscribe(
      res => {
      this.customers = this.customers.filter((a: any) => a.id != id);
       });

    this.router.navigateByUrl('/transactions');

  }

  ngOnInit(): void {
    this.showCustomers();
  }
}
