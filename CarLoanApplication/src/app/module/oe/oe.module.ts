import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CheckCibilScoreComponent } from './check-cibil-score/check-cibil-score.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';


@NgModule({
  declarations: [
    CheckCibilScoreComponent,
    DocumentVerificationComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
