import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }
  enquiry:Enquiry={
    enquiryId: 0,
    customerName: undefined,
    customerEmail: undefined,
    customerMobileno: 0,
    customerAadharno: 0,
    customerPanno: undefined,
  }
  submitEnquiry(e:Enquiry) {
    return this.http.post("http://localhost:9090/enquiry/save_enquiry",e);
  }
  viewEnquiry()
  {
    return this.http.get("http://localhost:9090/enquiry/getAll_enquiry");
  }
}
