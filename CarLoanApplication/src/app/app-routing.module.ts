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
import { ApplicationDashboardComponent } from './dashboard/application-dashboard/application-dashboard.component';
import { AddEnquiryComponent } from './module/re/add-enquiry/add-enquiry.component';


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
  },
  {
    path:'application',component:ApplicationDashboardComponent,
    children:[
      {
        path:'re' , loadChildren:()=>import('src/app/module/re/re.module').then(m=>m.ReModule),
    
      },
      {path:'oe' , loadChildren:()=>import('src/app/module/oe/oe.module').then(m=>m.OeModule)},
      {path:'cm' , loadChildren:()=>import('src/app/module/cm/cm.module').then(m=>m.CmModule)},
      {path:'ah' , loadChildren:()=>import('src/app/module/ah/ah.module').then(m=>m.AhModule)},
      {path:'admin' , loadChildren:()=>import('src/app/module/admin/admin.module').then(m=>m.AdminModule)},
      {path:'customer' , loadChildren:()=>import('src/app/module/customer/customer.module').then(m=>m.CustomerModule)},
      {path:'telecom' , loadChildren:()=>import('src/app/module/telecom/telecom.module').then(m=>m.TelecomModule)},
       

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
