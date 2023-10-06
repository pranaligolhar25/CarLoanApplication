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
  creditScore: number;

  getCreditScore() {
    this.cs.cibil(this.ssn).subscribe();
    
  }
}
