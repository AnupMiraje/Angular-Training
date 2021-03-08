import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databindingapp';
  imagepath = './assets/bird.jpg';
  buttonStatus = true;

  myEvent(event:any){
    console.log("I am clicked");
    console.log(event);
  }

  custname = "";
  
}
