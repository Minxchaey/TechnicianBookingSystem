import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
})
export class EditArticleComponent implements OnInit {

  customerId: any;
  customer :any;
  
  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.customerId = Number(routeParams.get('customerId'));
    this.articleService.find(this.customerId).subscribe((data:any) => {
      this.customer = data;

      console.log(this.customer);
    });

  }

  update(costumerName:string, costumerEmail:string, costumerAddress:string, costumerPassword:string){
    this.articleService.update(this.customerId, this.customer).subscribe((res) => {
      this.router.navigateByUrl('/transactions').then(() => {
        window.location.reload();
      });

    });
  }
}
