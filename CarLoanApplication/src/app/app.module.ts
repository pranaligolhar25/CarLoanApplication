import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleHeaderComponent } from './templates/module-header/module-header.component';
import { AppFooterComponent } from './templates/app-footer/app-footer.component';
import { AppHeaderComponent } from './templates/app-header/app-header.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { EmiCalculatorComponent } from './dashboard/emi-calculator/emi-calculator.component';
import { LoginComponent } from './dashboard/login/login.component';
import { RegistrationComponent } from './dashboard/registration/registration.component';
import { FaqsComponent } from './dashboard/faqs/faqs.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MenuComponent } from './templates/menu/menu.component';
import { EnquiryComponent } from './dashboard/enquiry/enquiry.component';
import { LoanComponent } from './dashboard/loan/loan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTemplateComponent } from './templates/main-template/main-template.component';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';


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

import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApplicationDashboardComponent } from './dashboard/application-dashboard/application-dashboard.component';
import { UsertypePipePipe } from './pipes/usertype-pipe.pipe';
import { ApplyLoanComponent } from './module/customer/apply-loan/apply-loan.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ModuleHeaderComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AboutUsComponent,
    EmiCalculatorComponent,
    LoginComponent,
    RegistrationComponent,
    FaqsComponent,
    HomeComponent,
    MenuComponent,
    EnquiryComponent,
    LoanComponent,
    MainTemplateComponent,
    ApplicationDashboardComponent,
    UsertypePipePipe,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    
     FlexLayoutModule,

     MatStepperModule,
     MatInputModule,
     MatDialogModule,
     MatSidenavModule,
     MatListModule,
     ReactiveFormsModule,

     FormsModule,
     HttpClientModule,
     ReactiveFormsModule,
     RouterModule,
     MatTooltipModule,
     RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }