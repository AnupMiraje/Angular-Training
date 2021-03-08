import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  title = 'Template Driven Form';
  userModel = new User('amitd','amitd2001@gmail.com','9850980543','','morning');
  topics = ['Angular','React','Vue'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
