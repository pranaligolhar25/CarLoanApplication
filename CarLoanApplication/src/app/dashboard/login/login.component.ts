import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(public fb:FormBuilder ){}

  loginform!: FormGroup;

  
  ngOnInit(): void {
    
    this.loginform=this.fb.group({

      username:[],
      password:[]

    })
  }

  savedata(){

    console.log(this.loginform.value);
  }

}

