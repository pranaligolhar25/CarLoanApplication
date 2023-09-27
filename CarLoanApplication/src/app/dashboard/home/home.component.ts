import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnquiryComponent } from '../enquiry/enquiry.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private dialog:MatDialog){}
  opencustomer(){

    this.dialog.open(EnquiryComponent);
  }
  }


