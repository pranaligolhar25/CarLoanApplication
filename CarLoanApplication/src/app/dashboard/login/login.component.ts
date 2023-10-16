import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(public fb:FormBuilder,
              public router: Router,
            ){}

  loginform!: FormGroup;
  
  ngOnInit(): void {
    
    this.loginform=this.fb.group({

      username:[],
      password:[]

    })
  }

  savedata(){

    
    let un:String =this.loginform.value.username;
    let ps:String =this.loginform.value.password;

    console.warn(this.loginform.value);
    
    if(un=="re" && ps=="re@123")
    {
      sessionStorage.setItem('type','re');
      alert("Hello RE")
     this.router.navigateByUrl('/application/re')
      console.log("relogin");
    }
    else if(un=="oe" && ps=="oe@123")
    {
      sessionStorage.setItem('type','oe')
      alert("Hello OE");
      this.router.navigateByUrl('/application/oe')
      console.log("oelogin");
    }
    else if(un=="customer" && ps=="customer@123")
    {
      sessionStorage.setItem('type','customer')
      alert("Hello Customer");
      this.router.navigateByUrl('/application/customer')
      console.log("customerlogin");
    }
    else if(un=="cm" && ps=="cm@123")
    {
      sessionStorage.setItem('type','cm')
      alert("Hello cm");
      this.router.navigateByUrl('/application/cm')
      console.log("cmlogin");
    }
    else if(un=="ah" && ps=="ah@123")
    {
      sessionStorage.setItem('type','ah')
      alert("Hello ah");
      this.router.navigateByUrl('/application/ah')
      console.log("ahlogin");
    }
    else if(un=="admin" && ps=="admin@123")
    {
      sessionStorage.setItem('type','admin')
      alert("Hello admin");
      this.router.navigateByUrl('/application/admin')
      console.log("adminlogin");
    }
    else if(un=="telecom" && ps=="telecom@123")
    {
      sessionStorage.setItem('type','telecom')
      alert("Hello admin");
      this.router.navigateByUrl('/application/telecom')
      console.log("telecomlogin");
    }
    
    else
    {
      alert("Enter Valid Cridentials");
    }
  }
 

   
  }



