import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  postcustomer(customer:FormData){

    return this.http.post("http://localhost:9090/customer/save_customer",customer);
  }
}
