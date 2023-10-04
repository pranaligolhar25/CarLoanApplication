import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { FeaturesBenifitsComponent } from './features-benifits/features-benifits.component';
import { TrackStatusComponent } from './track-status/track-status.component';


@NgModule({
  declarations: [
    OverviewComponent,
    FeaturesBenifitsComponent,
    TrackStatusComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
