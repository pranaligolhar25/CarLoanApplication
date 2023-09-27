import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/dashboard/login/login.component';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  constructor(private dialog:MatDialog){}

  openlogin(){

    this.dialog.open( LoginComponent , {
  
       width:'500px'
  
    });
  }

}
