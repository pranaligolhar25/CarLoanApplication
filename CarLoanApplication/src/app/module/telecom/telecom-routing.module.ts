import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { DefaulterListComponent } from './defaulter-list/defaulter-list.component';

const routes: Routes = [
  { path:"view_Appli",component:ViewApplicationComponent },
  { path:"defaulter_list",component:DefaulterListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelecomRoutingModule { }
