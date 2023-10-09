import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Sheard/customer.service';

@Component({
  selector: 'app-generate-sanc-letter',
  templateUrl: './generate-sanc-letter.component.html',
  styleUrls: ['./generate-sanc-letter.component.css']
})
export class GenerateSancLetterComponent {

  constructor(public cs:CustomerService,
    private router:Router,
    private _formBuilder: FormBuilder){}

  CustomerList:any[]=[];
  profileFormGroup: FormGroup = this._formBuilder.group({
    // firstCtrl: [''],
    customerName:['',Validators.required],
    customerEmail:['',Validators.required],
    customerAadharno:['',Validators.required],
    customerPanno:['',Validators.required],
    customerMobileno:['',Validators.required]

  });

  bankFormGroup: FormGroup = this._formBuilder.group({
    // secondCtrl: ['']
    bankAccountNumber:['',Validators.required],
    bankName:['',Validators.required],
    branchName:['',Validators.required],
    ifscNumber:['',Validators.required],
    cardNumber:['',Validators.required],
  
  });

  SanctionForm:FormGroup = this._formBuilder.group({
    sanctionId:[],
    tenure:[],
    rateOfInterest:[],
    agreementDate:[],
    customerTotalLoanRequired:[],
    sanctionAmount:[],
   
    offerValid:[]
  });

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

    condition:boolean=false;
    customerid:number;
    generateSanctionLetter(data:any)
    {
        this.condition=true;
        this.customerid=data.customerId;
        this.profileFormGroup.patchValue(data);
        this.bankFormGroup.patchValue(data.customerBankDetails);
      }
  
      saveSanction()
      {

        this.cs.updateCustomerSanctionLetter(this.customerid,this.SanctionForm.value).subscribe();
        window.location.reload();
      }
    
    }
