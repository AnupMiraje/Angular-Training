import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveapp';
  employees = ['Amit','Rahul','Sachin','Gautam'];
  mypwd="";
}
