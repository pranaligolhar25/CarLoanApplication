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
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
