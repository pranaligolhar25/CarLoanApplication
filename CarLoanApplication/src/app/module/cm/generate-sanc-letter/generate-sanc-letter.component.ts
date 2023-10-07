import { Component } from '@angular/core';
import { CustomerService } from 'src/app/Sheard/customer.service';

@Component({
  selector: 'app-generate-sanc-letter',
  templateUrl: './generate-sanc-letter.component.html',
  styleUrls: ['./generate-sanc-letter.component.css']
})
export class GenerateSancLetterComponent {

  constructor(public cs:CustomerService){}

  CustomerList:any[]=[];
    ngOnInit(): void {
      
      this.cs.getAllCustomer().subscribe((val:any[])=>
      {
        val.forEach(data=>{

          if(data.applicationStatus=="Loan Sanctioned")
          {
              this.CustomerList.push(data);
          }
        });
       
      });

    }

    generatePdf(data:any)
    {
        
    }
  

}
