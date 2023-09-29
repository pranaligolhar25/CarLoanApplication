import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanctionedLoanComponent } from './sanctioned-loan/sanctioned-loan.component';
import { DesbursmentComponent } from './desbursment/desbursment.component';
import { GenerateLedgerComponent } from './generate-ledger/generate-ledger.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { DefaulterListComponent } from './defaulter-list/defaulter-list.component';

const routes: Routes = [
  {path:"sanction_loan",component:SanctionedLoanComponent},
  {path:"disbursement",component:DesbursmentComponent},
  {path:"generate_ledger",component:GenerateLedgerComponent},
  {path:"view_ledger",component:ViewLedgerComponent},
  {path:"defaulter_list",component:DefaulterListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
