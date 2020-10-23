import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdecoretor',
  template: '<h2>Hello I am Input Decorator {{testName}}</h2>',
  styleUrls: ['./inputdecoretor.component.css']
})
export class InputdecoretorComponent  {
  @Input() testName:string;

  constructor() { }

 

}
