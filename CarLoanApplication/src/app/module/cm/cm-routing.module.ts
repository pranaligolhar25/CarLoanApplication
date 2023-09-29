import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateSancLetterComponent } from './generate-sanc-letter/generate-sanc-letter.component';
import { ViewLoanApplicationsComponent } from './view-loan-applications/view-loan-applications.component';

const routes: Routes = [
  {path:"sanction_sendmail",component:GenerateSancLetterComponent},
  {path:"view_loan",component:ViewLoanApplicationsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
