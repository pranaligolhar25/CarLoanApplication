import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {


  loanAmount: number = 10000;
  interestRate: number = 5;
  loanTenure: number = 12;
 
  calculateEMI(): number {
    const principal = this.loanAmount;
    const rateOfInterest = this.interestRate / 12 / 100;
    const tenureInMonths = this.loanTenure;

    const emi = (principal * rateOfInterest * Math.pow(1 + rateOfInterest, tenureInMonths)) /
                (Math.pow(1 + rateOfInterest, tenureInMonths) - 1);

    return emi;
  }
  calculateInterest(): number {
    
    const interest = (this.loanAmount * this.interestRate * this.loanTenure) / 100;
      return interest;
  }


}
