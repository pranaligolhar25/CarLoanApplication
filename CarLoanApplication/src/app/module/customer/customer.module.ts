import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { FeaturesBenifitsComponent } from './features-benifits/features-benifits.component';


@NgModule({
  declarations: [
    OverviewComponent,
    HowToApplyComponent,
    ApplyLoanComponent,
    FeaturesBenifitsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }