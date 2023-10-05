import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/Sheard/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  emp:any[]
constructor(private es:EmployeeService){}
ngOnInit(){
  this.es.getEmployee().subscribe((a:any[])=>{
    this.emp=a;
  })
}
}
