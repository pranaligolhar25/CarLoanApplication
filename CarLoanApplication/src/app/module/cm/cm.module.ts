import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { GenerateSancLetterComponent } from './generate-sanc-letter/generate-sanc-letter.component';
import { ViewLoanApplicationsComponent } from './view-loan-applications/view-loan-applications.component';


@NgModule({
  declarations: [
    GenerateSancLetterComponent,
    ViewLoanApplicationsComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule
  ]
})
export class CmModule { }
