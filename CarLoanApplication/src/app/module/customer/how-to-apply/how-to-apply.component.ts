import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-how-to-apply',
  templateUrl: './how-to-apply.component.html',
  styleUrls: ['./how-to-apply.component.css'],
  standalone: true,
  imports: [MatExpansionModule],


})
export class HowToApplyComponent {
  panelOpenState = false;

}
