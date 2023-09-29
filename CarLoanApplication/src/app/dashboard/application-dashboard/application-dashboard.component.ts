import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.css']
})
export class ApplicationDashboardComponent {

  userType:string;
  ngOnInit(): void {
    this.userType=sessionStorage.getItem('type');
  }

}
