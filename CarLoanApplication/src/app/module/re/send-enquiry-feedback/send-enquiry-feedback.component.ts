import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from 'src/app/Sheard/enquiry.service';

@Component({
  selector: 'app-send-enquiry-feedback',
  templateUrl: './send-enquiry-feedback.component.html',
  styleUrls: ['./send-enquiry-feedback.component.css']
})
export class SendEnquiryFeedbackComponent {

  constructor(private es:EnquiryService,private fb:FormBuilder){}

  enq:any[];
  

  ngOnInit(){

    this.es.viewEnquiry().subscribe((e:any[])=>{

      this.enq=e;

    });
   
   
  }


updatesave(x){
  
 x.applicationStatus="accept";
 alert(x.applicationStatus)
  this.es.updateEnquiry(x).subscribe();
}
reject(x){
 x.applicationStatus="reject";
 alert(x.applicationStatus)
  this.es.updateEnquiry(x).subscribe();
}

}
