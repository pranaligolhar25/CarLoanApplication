import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EnquiryService } from 'src/app/Sheard/enquiry.service';
import { Enquiry } from 'src/app/model/enquiry';



@Component({
  selector: 'app-check-cibil-score',
  templateUrl: './check-cibil-score.component.html',
  styleUrls: ['./check-cibil-score.component.css']
})
export class CheckCibilScoreComponent {
  constructor(private cs:EnquiryService,private fb:FormBuilder,public es:EnquiryService){}
  ssn: any;
  pancardname:any;
  creditScore:any;
  creditStatus:any;
  condition:boolean=false;
  enqry:any;
  getCreditScore() {
    this.cs.cibil(this.ssn).subscribe();
    this.cs.cibilget(this.ssn).subscribe((a:any)=>{
     this.enqry=a;
      this.creditScore=a.customerCibilDetails.cibilScore;
      this.creditStatus=a.customerCibilDetails.cibilStatus;
      
    })
  }

  cibilChecked()
  {
    this.enqry.applicationStatus="Cibil Checked";
    this.cs.updateEnquiry(this.enqry).subscribe((a:any)=>{
      console.warn(a)});

  }
  
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
  enquiry:Enquiry;
  enq:any[]=[];

  viewEnquiry()
  {
  this.es.viewEnquiry().subscribe((e:any[])=>{

    e.forEach(val=>{
      if(val.applicationStatus=="Send To Check Cibil")
      {
        this.enq.push(val);
      }
    });
    //  this.enq=e;
    
  });
  }

  checkCibil(enquiry:Enquiry)
  {
    this.condition=true;
    this.ssn=enquiry.customerPanno;
    this.pancardname=enquiry.customerName;
      // console.warn(enquiry);
      // enquiry.applicationStatus="Send To Check Cibil";
      // this.es.updateEnquiry(enquiry).subscribe((e:Enquiry)=>{
      //   this.enquiry=e;
      // });


  }



}
