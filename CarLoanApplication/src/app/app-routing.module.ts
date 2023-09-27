import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './templates/main-template/main-template.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { EmiCalculatorComponent } from './dashboard/emi-calculator/emi-calculator.component';
import { LoginComponent } from './dashboard/login/login.component';
import { LoanComponent } from './dashboard/loan/loan.component';
import { RegistrationComponent } from './dashboard/registration/registration.component';
import { FaqsComponent } from './dashboard/faqs/faqs.component';
import { EnquiryComponent } from './dashboard/enquiry/enquiry.component';


const routes: Routes = [
  
  {
    path:"",component:MainTemplateComponent,
    children:[
      {
        path:"",component:HomeComponent,
      },
      {
        path:"aboutus",component:AboutUsComponent
      },
      {
        path:"EmiCalculator",component:EmiCalculatorComponent
      },
      {
        path:"Login", component:LoginComponent
      },
      {
        path:"Loan", component:LoanComponent
      },
      {
        path:"register",component:RegistrationComponent
      },
      {
        path:"faq",component:FaqsComponent
      },
      {
        path:"enquiry",component:EnquiryComponent
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
