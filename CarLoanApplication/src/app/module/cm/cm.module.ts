import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { GenerateSancLetterComponent } from './generate-sanc-letter/generate-sanc-letter.component';
import { ViewLoanApplicationsComponent } from './view-loan-applications/view-loan-applications.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


@NgModule({
  declarations: [
    GenerateSancLetterComponent,
    ViewLoanApplicationsComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule,
    MaterialModule
  ]
})
export class CmModule { }
