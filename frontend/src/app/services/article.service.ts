import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url:string = 'http://localhost:8000';
  constructor(private http : HttpClient) {}

  listCustomers(){
    return this.http.get<any>(this.url+ `/api/customer`);
  }
  listTechnicians(){
    return this.http.get<any>(this.url+ `/api/technician`);
  }

  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json' ,   'Authorization': `Bearer ${localStorage.getItem('token')}`})
  };

  addCustomers(customer:any): Observable<any>{
    return this.http.post<any>(this.url+ `/api/customer`,customer, this.httpOptions);

  }

  find(id:number): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get<any>(this.url+ `/api/customer/`+id,  { headers: headers });
  }

  update(id : number, customer:any): Observable<any>{
    return this.http.put<any>(this.url+ `/api/customer/`+ id, customer, this.httpOptions);
  }

  deleteCustomer(id : any): Observable<any>{
    return this.http.delete<any>(this.url+ `/api/customer/`+ id, this.httpOptions);
  }
  deleteTechnicians(id : any): Observable<any>{
    return this.http.delete<any>(this.url+ `/api/technician/`+ id, this.httpOptions);
  }


  login1(credentials:any): Observable<any>{
    return this.http.post(this.url+ `/api/login/customer`,credentials);
  }

  login2(credentials:any): Observable<any>{
    return this.http.post(this.url+ `/api/login/technician`,credentials);
  }

  showSchedules(id:number): Observable<any>{
    return this.http.get(this.url+ `/api/schedule/` + id , this.httpOptions);
  }
  addSchedules(scheds:any): Observable<any>{
    return this.http.post(this.url+ `/api/schedule` , scheds, this.httpOptions);
  }
  addFeedbacks(feed:string): Observable<any>{
    return this.http.post(this.url+ `/api/feedback` , feed, this.httpOptions);
  }
  addCertificate(cer:any): Observable<any>{
    return this.http.post(this.url+ `/api/certificate` , cer, this.httpOptions);
  }
}


