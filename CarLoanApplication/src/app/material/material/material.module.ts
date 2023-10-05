import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule  } from '@angular/material/dialog';
import {MatInputModule  } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';  
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

const matrialmodule=[
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatStepperModule,
  MatInputModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatCheckboxModule,

  FlexLayoutModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
]


@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    matrialmodule
    
  ],
  exports:[
    matrialmodule
  ]
})
export class MaterialModule { }
