import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-transactions-technician',
  templateUrl: './transactions-technician.component.html',
  styleUrls: ['./transactions-technician.component.css']
})
export class TransactionsTechnicianComponent implements OnInit {
  constructor(private articlesService: ArticleService, private router: Router, private http: HttpClient, @Inject(DOCUMENT) document: Document,
  ) { }
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

  printTransac() {
    const div = document.getElementsByClassName('table-container')[0].innerHTML;
    const Original = document.body.innerHTML;
    const popupWindow = window;
    popupWindow.document.write(`<html><body>` + `<h1>Your Transactions</h1>` + div + `</body></html>`);
    popupWindow.print();
    // popupWindow.document.write("hello");
    popupWindow.close();
    window.location.reload();


  }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    this.showCustomers();

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}

