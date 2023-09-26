import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulefooterComponent } from './templates/modulefooter/modulefooter.component';
import { ModuleHeaderComponent } from './templates/module-header/module-header.component';
import { AppFooterComponent } from './templates/app-footer/app-footer.component';
import { AppHeaderComponent } from './templates/app-header/app-header.component';
import { AdminMenubarComponent } from './templates/admin-menubar/admin-menubar.component';
import { AhMenubarComponent } from './templates/ah-menubar/ah-menubar.component';
import { CmMenubarComponent } from './templates/cm-menubar/cm-menubar.component';
import { OeMenubarComponent } from './templates/oe-menubar/oe-menubar.component';
import { ReMenubarComponent } from './templates/re-menubar/re-menubar.component';
import { CustomerMenubarComponent } from './templates/customer-menubar/customer-menubar.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { EmiCalculatorComponent } from './dashboard/emi-calculator/emi-calculator.component';
import { LoginComponent } from './dashboard/login/login.component';
import { RegistrationComponent } from './dashboard/registration/registration.component';
import { FaqsComponent } from './dashboard/faqs/faqs.component';
import { HomeComponent } from './dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulefooterComponent,
    ModuleHeaderComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AdminMenubarComponent,
    AhMenubarComponent,
    CmMenubarComponent,
    OeMenubarComponent,
    ReMenubarComponent,
    CustomerMenubarComponent,
    AboutUsComponent,
    EmiCalculatorComponent,
    LoginComponent,
    RegistrationComponent,
    FaqsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
