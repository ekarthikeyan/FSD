import { Component } from '@angular/core';
import { Family } from './first';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disp: string;
  msg: Family = new Family('karthik' , 'valar');
  title = 'Karthik\'s first app';
  disp1 = this.msg.greet();
}
