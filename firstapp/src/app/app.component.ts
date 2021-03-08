import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `<h1>{{title}}</h1>
  <p>We are learning Angular</p>`,
  
  styles: [`h1{
    color: blue;
  }
  p{
      color: red;
  }`]
})
export class AppComponent {
  title = 'Welcome to Angular!';
}
