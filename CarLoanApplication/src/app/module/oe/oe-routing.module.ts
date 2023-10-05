import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilScoreComponent } from './check-cibil-score/check-cibil-score.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';

const routes: Routes = [
  { path:"check_cibil",component:CheckCibilScoreComponent },
  
  { path:"verify_doc",component:DocumentVerificationComponent,
  },
  {
    path:"CustomerData/:id",component:CustomerDataComponent
  },
  
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
