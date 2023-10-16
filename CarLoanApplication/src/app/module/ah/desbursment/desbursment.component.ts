import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Sheard/customer.service';

@Component({
  selector: 'app-desbursment',
  templateUrl: './desbursment.component.html',
  styleUrls: ['./desbursment.component.css']
})
export class DesbursmentComponent {

  constructor(public cs:CustomerService,
    private router:Router,
    private _formBuilder: FormBuilder){}
    
    letter:any[];
    getallcustomer(){
      this.cs.getAllCustomer().subscribe((a:any[])=>{
      this.letter=a;
      })
    }
ngOnInit(){
  this.getallcustomer();
}
sendmail(customer:any){
  alert(customer.customerId)
  this.cs.sendSanctionLetterMail(customer).subscribe();
}
imagecondition:boolean=true;
    imagefile:any;
    gotoimage(image:any)
    {
      this.imagecondition=false;
      console.log(image);
     this.imagefile=image;
    }
}
