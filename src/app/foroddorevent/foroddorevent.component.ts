import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foroddorevent',
  templateUrl: './foroddorevent.component.html',
  styleUrls: ['./foroddorevent.component.css']
})
export class ForoddoreventComponent implements OnInit {

  
  data=null;
  data1=[{name:'Saran',age:30,gender:'m'},
  {name:'David',age:28,gender:'m'},
  {name:'Cholai',age:37,gender:'m'},
  {name:'Nandu',age:27,gender:'f'},
  {name:'yuvaraj',age:37,gender:''},
  {name:'Iruthaiyaraj',age:62,gender:'m'},
  {name:'Ilakiya',age:33,gender:'f'}]


  data2=[{name:'David',age:28,gender:'m'},
  {name:'Cholai',age:37,gender:'m'},
  {name:'Nandu',age:27,gender:'f'},
  {name:'Saran',age:30,gender:'m'},
  {name:'yuvaraj',age:37,gender:''},
  {name:'Iruthaiyaraj',age:62,gender:'m'},
  {name:'Ilakiya',age:33,gender:'f'}]


  constructor() { 
    this.data=this.data1;
  }

  
  order(){
    this.data=this.data[0].name==this.data1[0]
    .name?this.data2:this.data1;
  }

  // getName(index,data){
  //   return data.name;
  // }
  ngOnInit(): void {
  }

}
