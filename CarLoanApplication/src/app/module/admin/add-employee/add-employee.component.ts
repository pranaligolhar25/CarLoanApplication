import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeService } from 'src/app/Sheard/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AddEmployeeComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder , public es:EmployeeService) {}

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
    employeeName:['',Validators.required],
    employeeDOB:['',Validators.required],
    employeeEmail:['',Validators.required],
    employeeMobileNo:['',Validators.required],
    employeeGender:['',Validators.required],
    employeeRole:['',Validators.required]
  });

  permanentaddform: FormGroup = this._formBuilder.group({
    // firstCtrl: [''],
    employeeState:['',Validators.required],
    employeeDistrict:['',Validators.required],
    employeeCity:['',Validators.required],
    employeeArea:['',Validators.required],
    employeeLandmark:['',Validators.required],
    employeePinCode:['',Validators.required]

  });


  localaddform: FormGroup = this._formBuilder.group({
    // secondCtrl: ['']

    employeeState:['',Validators.required],
    employeeDistrict:['',Validators.required],
    employeeCity:['',Validators.required],
    employeeArea:['',Validators.required],
    employeeLandmark:['',Validators.required],
    employeePinCode:['',Validators.required]

});

bankFormGroup: FormGroup = this._formBuilder.group({
  // secondCtrl: ['']
  employeeAccNo:['',Validators.required],
  employeeBankName:['',Validators.required],
  employeeBranchName:['',Validators.required],
  employeeIFSCNo:['',Validators.required],
  employeeBankCode:['',Validators.required],
  employeeCIFNo:['',Validators.required]
});


 
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


  savepersonaldetails(){

    console.log(this.profileFormGroup.value);

  }

success(){

  console.log(this.permanentaddform)
  console.log(this.bankFormGroup.value)
  let profilejson:string=JSON.stringify(this.profileFormGroup.value);
  let permanentaddjson:string=JSON.stringify(this.permanentaddform.value);
  let localaddjson:string=JSON.stringify(this.localaddform.value);
  let bankdetailsjson:string=JSON.stringify(this.bankFormGroup.value);

    const formData:FormData=new FormData();

    formData.append("details",profilejson);
    formData.append("permanentAddr",permanentaddjson);
    formData.append("localAddr",localaddjson);
    formData.append("bankDetails",bankdetailsjson);
    formData.append("aadhar",this.customerAadhar);
    formData.append("pan",this.customerPan);
    formData.append("profileImg",this.customerProfilePhoto);
    formData.append("signature",this.customerSignature);
    

     this.es.postemployee(formData).subscribe((data:any)=>{console.warn(data);});
    
  }

  useSameAddress: boolean = false;
  copyLocalToPermanent() {
    
        this.localaddform.patchValue({
          
          employeeState:this.permanentaddform.value.employeeState,
          employeeDistrict:this.permanentaddform.value.employeeDistrict,
          employeeCity:this.permanentaddform.value.employeeCity,
          employeeArea:this.permanentaddform.value.employeeArea,
          employeeLandmark:this.permanentaddform.value.employeeLandmark,
          employeePinCode:this.permanentaddform.value.employeePinCode
        })
      }
 


}

