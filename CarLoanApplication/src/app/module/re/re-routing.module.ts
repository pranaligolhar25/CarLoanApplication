import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { SendEnquiryFeedbackComponent } from './send-enquiry-feedback/send-enquiry-feedback.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { ViewAcceptedLoansComponent } from './view-accepted-loans/view-accepted-loans.component';

const routes: Routes = [

  { path:"",component:ViewEnquiryComponent },
  { path:"addEnquiry",component:AddEnquiryComponent },
  { path:"viewenq",component:ViewEnquiryComponent },
  { path:"sendEnqFeed",component:SendEnquiryFeedbackComponent },
  { path:"applyloan",component:ApplyForLoanComponent },
  { path:"viewloans",component:ViewAcceptedLoansComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
