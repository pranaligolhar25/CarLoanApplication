import { Component } from '@angular/core';
import { EnquiryService } from 'src/app/Sheard/enquiry.service';

@Component({
  selector: 'app-check-cibil-score',
  templateUrl: './check-cibil-score.component.html',
  styleUrls: ['./check-cibil-score.component.css']
})
export class CheckCibilScoreComponent {
  constructor(private cs:EnquiryService){}
  ssn: any;
  creditScore:any[];

  getCreditScore() {
    this.cs.cibil(this.ssn).subscribe();
    this.cs.cibilget(this.ssn).subscribe((a:any[])=>{
     
      this.creditScore=a;
    })
  }

  
}
