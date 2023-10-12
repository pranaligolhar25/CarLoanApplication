import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CheckCibilScoreComponent } from './check-cibil-score/check-cibil-score.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';

import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material/material.module';


@NgModule({
  declarations: [
    CheckCibilScoreComponent,
    DocumentVerificationComponent,
    CustomerDataComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class OeModule { }
