import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from 'src/app/Sheard/enquiry.service';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.css']
})
export class AddEnquiryComponent {
  constructor(private fb:FormBuilder,public es:EnquiryService)
  {}
  enquiryForm:FormGroup;

  ngOnInit()
  {
    this.enquiryForm=this.fb.group(
      {
        customerName:[],
        customerEmail:['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        customerMobileno:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
        customerAadharno:['', [Validators.required, Validators.pattern("[0-9]{4}\s[0-9]{4}\s[0-9]{4}$")]],
        customerPanno:['', [Validators.required, Validators.pattern("^[A-Za-z]{5}[0-9]{4}[A-Za-z]$")]]
      }
    )
  }
  submitEnquiry()
  {
    this.es.enquiry.customerName=this.enquiryForm.value.customerName;
    this.es.enquiry.customerEmail=this.enquiryForm.value.customerEmail;
      this.es.enquiry.customerMobileno=this.enquiryForm.value.customerMobileno;
    this.es.enquiry.customerAadharno=this.enquiryForm.value.customerAadharno;
    this.es.enquiry.customerPanno=this.enquiryForm.value.customerPanno;


    this.es.submitEnquiry(this.es.enquiry).subscribe();
    window.location.reload();

  }
  get f(){  
    return this.enquiryForm.controls;  
  }  

}
