import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structdirc',
  templateUrl: './structdirc.component.html',
  styleUrls: ['./structdirc.component.css']
})
export class StructdircComponent  {

  //data=null;
data=[{name:'Aravavind',age:30,gender:'m'},
{name:'Silambu',age:28,gender:'m'},
{name:'Arun',age:37,gender:'m'},
{name:'Sheela',age:27,gender:'f'},
{name:'senba',age:37,gender:''},
{name:'Madhan',age:62,gender:'m'},
{name:'Senthil',age:33,gender:'f'},]

  constructor() { }


}
