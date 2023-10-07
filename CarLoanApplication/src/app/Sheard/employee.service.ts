import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  postemployee(customer:FormData){

    return this.http.post("http://localhost:9090/employee/save_employee",customer);
  }

  getEmployee(){
    return this.http.get("http://localhost:9090/employee/get_all_employee");
  }
  deleteEmployee(s:any){
  
    return this.http.delete("http://localhost:9090/employee/delete_employee/"+s.employeeId);
  }

}
