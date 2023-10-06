import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }
  enquiry:Enquiry={
    id: 0,
    customerName: undefined,
    customerEmail: undefined,
    customerMobileno: 0,
    customerAadharno: 0,
    customerPanno: undefined,
    applicationStatus: undefined
  }
  submitEnquiry(e:Enquiry) {
    return this.http.post("http://localhost:9090/enquiry/save_enquiry",e);
  }
  viewEnquiry()
  {
    return this.http.get("http://localhost:9090/enquiry/getAll_enquiry");
  }
  viewEnquiryById(id:number)
  {
    return this.http.get("http://localhost:9090/enquiry/getSingle_enquiry/"+id);
  }
  viewEnquiryStatus(e:Enquiry)
  {
    return this.http.get("http://localhost:9090/enquiry/get_by_status/"+e.applicationStatus);

  }
  updateEnquiry(e:Enquiry)
  {
    return this.http.put("http://localhost:9090/enquiry/update_enquiry/"+e.id,e);
  }
  
  deleteEnquiry(e:Enquiry)
  {
    return this.http.delete("http://localhost:9090/enquiry/delete_enquiry/"+e.id);

  }
  cibil(s:any){
    return this.http.put("http://localhost:9090/enquiry/check_cibil/"+s,s);
  }
}
