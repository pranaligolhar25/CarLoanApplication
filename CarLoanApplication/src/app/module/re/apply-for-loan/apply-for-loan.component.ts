import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/Sheard/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})
export class ApplyForLoanComponent {

  constructor(private _formBuilder: FormBuilder , public cs:CustomerService) {}

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



  isLinear = false;

 
ngOnInit(): void {
  

}

aadhardoc(value:any){

  this.customerAadhar=value.target.files[0]

}

pandoc(value:any){

  this.customerPan=value.target.files[0]

}
profiledoc(value:any){

  this.customerProfilePhoto=value.target.files[0]

}
signaturedoc(value:any){

  this.customerSignature=value.target.files[0]

}

salaryslipdoc(value:any){

  this.customerSalaryslip=value.target.files[0]

}

drivinglicensedoc(value:any){

  this.customerDrivingLicense=value.target.files[0]

}

bankstatementdoc(value:any){

  this.customerBankStatement=value.target.files[0]

}

carquotationdoc(value:any){

 this.customerCarQuotation=value.target.files[0]

}

form16doc(value:any){

   this.customerForm16=value.target.files[0]

}

itrdoc(value:any){

 this.customerITR=value.target.files[0]

 console.log(this.customerITR);

}

  savepersonaldetails(){

    console.log(this.profileFormGroup.value);

  }

success(){

  let profilejson:string=JSON.stringify(this.profileFormGroup.value);
  let permanentaddjson:string=JSON.stringify(this.permanentaddform.value);
  let localaddjson:string=JSON.stringify(this.localaddform.value);
  let bankdetailsjson:string=JSON.stringify(this.bankFormGroup.value);

    const formData:FormData=new FormData();

    formData.append("customerprofile",profilejson);
    formData.append("permanentadd",permanentaddjson);
    formData.append("localadd",localaddjson);
    formData.append("bankdetails",bankdetailsjson);
    formData.append("aadhar",this.customerAadhar);
    formData.append("pan",this.customerPan);
    formData.append("profilePhoto",this.customerProfilePhoto);
    formData.append("signature",this.customerSignature);
    formData.append("salarySlip",this.customerSalaryslip);
    formData.append("drivingLicense",this.customerDrivingLicense);
    formData.append("bankStatement",this.customerBankStatement);
    formData.append("carQuotation",this.customerCarQuotation);
    formData.append("form16",this.customerForm16);
    formData.append("itr",this.customerITR);


     this.cs.postcustomer(formData).subscribe((data:any)=>{console.warn(data);});
    


     Swal.fire("Thank You..." , 'You Submitted Successfully','success')
  }




  applyLoanForm


}
