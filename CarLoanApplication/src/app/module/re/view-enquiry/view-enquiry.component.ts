import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from 'src/app/Sheard/enquiry.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {
  constructor(private fb:FormBuilder,public es:EnquiryService)
  {}
  enquiryForm:FormGroup;
  ngOnInit()
  {
    this.enquiryForm=this.fb.group(
      {
        customerName:[],
        customerEmail:[],
        customerMobileno:[],
        customerAadharno:[],
        customerPanno:[]
      }
    )
    this.viewEnquiry();
  }
  e:Enquiry[];
  viewEnquiry()
  {
  this.es.viewEnquiry().subscribe((e:Enquiry[])=>{
    this.e=e;
  })
  }

}
