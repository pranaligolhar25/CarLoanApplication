import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyForLoanComponent } from '../re/apply-for-loan/apply-for-loan.component';
import { FeaturesBenifitsComponent } from './features-benifits/features-benifits.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { OverviewComponent } from './overview/overview.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';

const routes: Routes = [
  {path:"apply_loan",component:ApplyLoanComponent},
  {path:"feature_Benifits",component:FeaturesBenifitsComponent},
  {path:"track_status",component:TrackStatusComponent},
  {path:"how_to_apply",component:HowToApplyComponent},
  {path:"overview",component:OverviewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
