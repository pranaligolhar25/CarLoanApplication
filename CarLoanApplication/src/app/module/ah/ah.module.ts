import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { SanctionedLoanComponent } from './sanctioned-loan/sanctioned-loan.component';
import { DesbursmentComponent } from './desbursment/desbursment.component';
import { GenerateLedgerComponent } from './generate-ledger/generate-ledger.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { DefaulterListComponent } from './defaulter-list/defaulter-list.component';


@NgModule({
  declarations: [
    SanctionedLoanComponent,
    DesbursmentComponent,
    GenerateLedgerComponent,
    ViewLedgerComponent,
    DefaulterListComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule
  ]
})
export class AhModule { }
