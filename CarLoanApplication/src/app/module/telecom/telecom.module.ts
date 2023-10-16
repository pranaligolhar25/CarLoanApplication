import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelecomRoutingModule } from './telecom-routing.module';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { DefaulterListComponent } from './defaulter-list/defaulter-list.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewApplicationComponent,
    DefaulterListComponent
  ],
  imports: [
    CommonModule,
    TelecomRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TelecomModule { }
