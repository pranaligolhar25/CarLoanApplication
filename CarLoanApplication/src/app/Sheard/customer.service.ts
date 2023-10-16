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

  getAllCustomer()
  {
    return this.http.get("http://localhost:9090/customer/getAll_customer");
  }

  getCustomerById(id:number)
  {
    return this.http.get("http://localhost:9090/customer/getSingle_customer/"+id);
  }

  updateCustomer(customer:FormData)
  {
    return this.http.put("http://localhost:9090/customer/update_customer",customer);
  }
  updateCustomerStatus(customer:any)
  {
    return this.http.put("http://localhost:9090/customer/update_customer_status",customer);
  }
  updateCustomerSanctionLetter(customerid:number,sanctionData:any)
  {
    console.warn(customerid);
    console.warn(sanctionData);
    return this.http.put("http://localhost:9090/customer/update_customer_SanctionDetails/"+customerid,sanctionData);
  }
  deleteCustomer(id:number)
  {
    return this.http.delete("http://localhost:9090/customer/delete_customer/"+id);
  }
  generatesactionletter(customer:any){
    alert(customer)
    return this.http.get("http://localhost:9090/customer/generate_pdf/"+customer);
  }
  sendSanctionLetterMail(customer:any){
    return this.http.get("http://localhost:9090/customer/send_sanction_letter/"+customer.customerId);
  }
}
