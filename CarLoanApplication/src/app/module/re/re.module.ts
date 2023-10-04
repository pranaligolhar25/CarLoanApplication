import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { SendEnquiryFeedbackComponent } from './send-enquiry-feedback/send-enquiry-feedback.component';
import { ViewAcceptedLoansComponent } from './view-accepted-loans/view-accepted-loans.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEnquiryComponent,
    ViewEnquiryComponent,
    SendEnquiryFeedbackComponent,
    ViewAcceptedLoansComponent,
    ApplyForLoanComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReModule { }
