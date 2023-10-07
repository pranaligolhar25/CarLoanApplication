import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { Subscriber } from 'rxjs';

import { EnquiryService } from 'src/app/Sheard/enquiry.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {
  constructor(public fb:FormBuilder,public es:EnquiryService,public router:Router)
  {}
  enquiryForm:FormGroup;

  ngOnInit()
  {

    this.enquiryForm=this.fb.group({
      customerName:[],
      customerEmail:[],
      customerMobileno:[] ,
      customerAadharno:[],
      customerPanno:[]


    })
    

    // this.enquiryForm=this.fb.group(
    //   {
    //     customerName:[],
    //     customerEmail:[],
    //     customerMobileno:[],
    //     customerAadharno:[],
    //     customerPanno:[]
    //   }
    // )

    this.viewEnquiryfunction()
  }
  // e:Enquiry[];
   enquiry:Enquiry;
   enq:any[]=[];

  viewEnquiryfunction()
  {
  this.es.viewEnquiry().subscribe((e:any[])=>{

    e.forEach(val=>{
      if(val.applicationStatus=="null")
      {
        this.enq.push(val);
      }
    });
    //  this.enq=e;
    
  });
  }

  checkCibil(enquiry:Enquiry)
  {
      console.warn(enquiry);
      enquiry.applicationStatus="Send To Check Cibil";
      this.es.updateEnquiry(enquiry).subscribe((e:Enquiry)=>{
        this.enquiry=e;
      });

      window.location.reload();

  }
  edit(e:Enquiry)
  {

    this.router.navigateByUrl('application/re/addEnquiry');

  }
  delete(e:Enquiry)
  {
    this.es.deleteEnquiry(e).subscribe();
    window.location.reload();
  }

}
