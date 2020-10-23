import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-templateusing',
  templateUrl: './struct-templateusing.component.html',
  styleUrls: ['./struct-templateusing.component.css']
})
export class StructTemplateusingComponent  {
  data=[{name:'Kavin',age:30,gender:'m'},
{name:'Nanda',age:28,gender:'m'},
{name:'Amuthu',age:37,gender:'m'},
{name:'jeevita',age:27,gender:'f'},
{name:'Needhi',age:37,gender:''},
{name:'Gold',age:62,gender:'m'},
{name:'Chitra',age:33,gender:'f'}]



  constructor() { }


}
