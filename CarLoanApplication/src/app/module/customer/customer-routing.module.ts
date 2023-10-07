import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyForLoanComponent } from '../re/apply-for-loan/apply-for-loan.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { OverviewComponent } from './overview/overview.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

const routes: Routes = [
  {path:"apply_loan",component:ApplyLoanComponent},
  {path:"emical",component:EmiCalculatorComponent},
  {path:"track_status",component:TrackStatusComponent},
  {path:"how_to_apply",component:HowToApplyComponent},
  {path:"overview",component:OverviewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { 

}
