import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Sheard/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {

  constructor(private route:ActivatedRoute, 
    private router:Router,
    public cs:CustomerService,
    private _formBuilder: FormBuilder) {}
  
    condition:boolean=false;
    changecondition()
    {
      this.condition=true;
    }
    goback()
    {
      this.condition=false;
    }
    imagecondition:boolean=true;
    imagefile:any;
    gotoimage(image:any)
    {
      this.imagecondition=false;
      console.log(image);
     this.imagefile=image;
    }
    gobacktoTable()
    {
      this.imagecondition=true;
    }
    customer:any;

  ngOnInit(): void {
    this.cs.getCustomerById(this.route.snapshot.params['id']).subscribe((data:any)=>{
      this.customer=data
      this.profileFormGroup.patchValue(data);
        this.permanentaddform.patchValue(data.customerPermanentAddress);
        this.localaddform.patchValue(data.customerLocalAddress);
        this.bankFormGroup.patchValue(data.customerBankDetails);

        this.customerProfilePhoto=data.customerDocuments.customerProfilePhoto;
        this.customerSignature=data.customerDocuments.customerSignature;
        this.customerAadhar=data.customerDocuments.customerAadhar;
        this.customerSalaryslip=data.customerDocuments.customerSalaryslip;
        this.customerDrivingLicense=data.customerDocuments.customerDrivingLicense;
        this.customerBankStatement=data.customerDocuments.customerBankStatement;
        this.customerCarQuotation=data.customerDocuments.customerCarQuotation;
        this.customerForm16=data.customerDocuments.customerForm16;
        this.customerITR=data.customerDocuments.customerITR;
        this.customerPan=data.customerDocuments.customerPan;

    });
  }
  

  customerAadhar:any;
  customerPan:any;
  customerProfilePhoto:any;
  customerSignature:any;
  customerSalaryslip:any;
  customerDrivingLicense:any;
  customerBankStatement:any;
  customerCarQuotation:any;
  customerForm16:any;
  customerITR:any;

  Adharcheck = true;
  Pancheck = true;
  Profilecheck = true;
  Signcheck = true;
  salarycheck = true;
  Drivingcheck = true;
  Bankcheck = true;
  CarQcheck = true;
  Form16check = true;
  Itrchecked = true;
  isInputDisabled: boolean = false;
  
  profileFormGroup: FormGroup = this._formBuilder.group({
    // firstCtrl: [''],
    customerName:['',Validators.required],
    customerEmail:['',Validators.required],
    customerAadharno:['',Validators.required],
    customerPanno:['',Validators.required],
    customerMobileno:['',Validators.required]

  });

  permanentaddform: FormGroup = this._formBuilder.group({
    // firstCtrl: [''],
    areaName:['',Validators.required],
    cityName:['',Validators.required],
    districtName:['',Validators.required],
    landMark:['',Validators.required],
    stateName:['',Validators.required],
    pinCodeNumber:['',Validators.required]

  });


  localaddform: FormGroup = this._formBuilder.group({
    // secondCtrl: ['']

  areaName:['',Validators.required],
  cityName:['',Validators.required],
  districtName:['',Validators.required],
  landMark:['',Validators.required],
  stateName:['',Validators.required],
  pinCodeNumber:['',Validators.required]

});

bankFormGroup: FormGroup = this._formBuilder.group({
  // secondCtrl: ['']
  bankAccountNumber:['',Validators.required],
  bankName:['',Validators.required],
  branchName:['',Validators.required],
  ifscNumber:['',Validators.required],
  cardNumber:['',Validators.required],

});

sanctionLetter()
{
  this.customer.applicationStatus="Loan Sanctioned";
  this.cs.updateCustomerStatus(this.customer).subscribe();
  window.location.reload();
  // this.router.navigateByUrl("../");
}

Reject()
{
  this.customer.applicationStatus="Reject";
  this.cs.updateCustomerStatus(this.customer).subscribe();
  window.location.reload();
}



}
