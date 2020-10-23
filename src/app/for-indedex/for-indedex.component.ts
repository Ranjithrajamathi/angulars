import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-indedex',
  templateUrl: './for-indedex.component.html',
  styleUrls: ['./for-indedex.component.css']
})
export class ForIndedexComponent  {

  constructor() { }


  data=[{name:'Saran',age:30,gender:'m'},
  {name:'David',age:28,gender:'m'},
  {name:'Cholai',age:37,gender:'m'},
  {name:'Nandu',age:27,gender:'f'},
  {name:'yuvaraj',age:37,gender:''},
  {name:'Iruthaiyaraj',age:62,gender:'m'},
  {name:'Ilakiya',age:33,gender:'f'}]

}
