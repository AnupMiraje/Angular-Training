import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  title = 'child app';
  @Input('parentData') public mycompname : any;
  public name="Anup";
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  greetUser():string{
    return "Hello Mr " + this.name;
  }

  fireEvent(){
    this.childEvent.emit("Hello to Parent company Softra from its child franchize");
  }

}
