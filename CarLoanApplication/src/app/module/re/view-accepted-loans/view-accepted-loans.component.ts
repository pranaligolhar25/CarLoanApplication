import { Component } from '@angular/core';
import { EnquiryService } from 'src/app/Sheard/enquiry.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-view-accepted-loans',
  templateUrl: './view-accepted-loans.component.html',
  styleUrls: ['./view-accepted-loans.component.css']
})
export class ViewAcceptedLoansComponent {
  constructor(private es:EnquiryService)
  {

  }
  e:Enquiry[];
  ngOnInit()
  {
  }
  viewEnquiryStatus(e:Enquiry)
  {
  this.es.viewEnquiryStatus(e).subscribe((e:Enquiry[])=>{
    this.e=e;
  });
  }
}
