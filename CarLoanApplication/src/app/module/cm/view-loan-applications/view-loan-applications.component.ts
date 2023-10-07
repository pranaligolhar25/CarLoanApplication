import { Component } from '@angular/core';
import { CustomerService } from 'src/app/Sheard/customer.service';

@Component({
  selector: 'app-view-loan-applications',
  templateUrl: './view-loan-applications.component.html',
  styleUrls: ['./view-loan-applications.component.css']
})
export class ViewLoanApplicationsComponent {

  constructor(public cs:CustomerService){}

CustomerList:any[]=[];
  ngOnInit(): void {
    
    this.cs.getAllCustomer().subscribe((val:any[])=>
    {
      val.forEach(data=>{
        if(data.applicationStatus=="Documents Verified")
        {
          this.CustomerList.push(data);
        }
       
      });
    });
  }

}
