import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from 'src/app/Sheard/enquiry.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.css']
})
export class AddEnquiryComponent {
  constructor(private fb:FormBuilder,public es:EnquiryService,
    private route:ActivatedRoute,
    public router:Router)
  {}
  enquiryForm:FormGroup;
  e:any;
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

    this.route.snapshot.params['id'];
    // console.log(this.route.snapshot.params['id']);

    this.es.viewEnquiryById( this.route.snapshot.params['id']).subscribe((e:any)=>{
      this.enquiryForm.patchValue(e);
    })

  }
  submitEnquiry()
  {
    this.es.enquiry.customerName=this.enquiryForm.value.customerName;
    this.es.enquiry.customerEmail=this.enquiryForm.value.customerEmail;
      this.es.enquiry.customerMobileno=this.enquiryForm.value.customerMobileno;
    this.es.enquiry.customerAadharno=this.enquiryForm.value.customerAadharno;
    this.es.enquiry.customerPanno=this.enquiryForm.value.customerPanno;
    // if(this.es.enquiry.id==1)
    // {
      this.es.submitEnquiry(this.es.enquiry).subscribe();
      window.location.reload();  
    // }
    // else{
    //   this.es.updateEnquiry(this.es.enquiry).subscribe();
    //   window.location.reload();
    // }



  }
  get f(){  
    return this.enquiryForm.controls;  
  }  

}
