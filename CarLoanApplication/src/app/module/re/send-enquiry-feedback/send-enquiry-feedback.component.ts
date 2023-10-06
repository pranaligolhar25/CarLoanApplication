import { Component } from '@angular/core';
import { EnquiryService } from 'src/app/Sheard/enquiry.service';

@Component({
  selector: 'app-send-enquiry-feedback',
  templateUrl: './send-enquiry-feedback.component.html',
  styleUrls: ['./send-enquiry-feedback.component.css']
})
export class SendEnquiryFeedbackComponent {

  constructor(private es:EnquiryService){}

  enq:any[];

  ngOnInit(){

    this.es.viewEnquiry().subscribe((e:any[])=>{

      this.enq=e;

    });

  }
updateStatus(){
}
}
