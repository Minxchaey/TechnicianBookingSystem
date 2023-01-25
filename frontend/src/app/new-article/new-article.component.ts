import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements OnInit {
  constructor(private articleService : ArticleService) {}

  customers : any;
  ngOnInit(): void {}

  add(costumerName: string, costumerEmail: string, costumerAddress: string, costumerPassword: string) {

    this.customers = {
      'name': costumerName,
      'email': costumerEmail,
      'address': costumerAddress,
      'password': costumerPassword
    };
    this.articleService.addCustomers(this.customers as any).subscribe(customer => {
      this.customers = customer;
    });
    console.log(this.customers);
  }
}
