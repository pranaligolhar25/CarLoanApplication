import { Component, OnInit } from '@angular/core';
import { UserOption } from 'src/app/model/user-option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Array<any>;
  type:string;
  
  ngOnInit(): void {
    this.menus=UserOption.userOptions;
    console.log(this.menus);
    this.type=sessionStorage.getItem('type');
  }
}
