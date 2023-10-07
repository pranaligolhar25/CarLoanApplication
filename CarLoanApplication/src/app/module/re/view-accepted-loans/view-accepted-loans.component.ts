import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EnquiryService } from 'src/app/Sheard/enquiry.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-view-accepted-loans',
  templateUrl: './view-accepted-loans.component.html',
  styleUrls: ['./view-accepted-loans.component.css']
})
export class ViewAcceptedLoansComponent {
  constructor(private es:EnquiryService,private fb:FormBuilder){}



  enq:any[]=[];


  ngOnInit(){

    this.es.viewEnquiry().subscribe((e:any[])=>{

      e.forEach(val=>{
        if(val.applicationStatus=="accept")
        {
          this.enq.push(val);
        }
      });

      console.warn(this.enq);
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
