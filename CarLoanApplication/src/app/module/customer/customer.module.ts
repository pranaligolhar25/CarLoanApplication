import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';

import { TrackStatusComponent } from './track-status/track-status.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { MaterialModule } from 'src/app/material/material/material.module';


@NgModule({
  declarations: [
    OverviewComponent,
    
   
    TrackStatusComponent,
         EmiCalculatorComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule
  ]
})
export class CustomerModule { }
