import { from } from 'rxjs';
import{Directive, Input,TemplateRef,ViewContainerRef} from '@angular/core'

@Directive({
  selector:'[show]'
})

export class ShowdirectiveComponent  {
  //Element Reference ,Container Refference,Template Reffernce
     rendered=false;
@Input() set show(value){
if(value && !this.rendered){
this.container.createEmbeddedView(this.template);
}else if(!value&&this.rendered)
  this.container.clear();
}

constructor(public template:TemplateRef<any>, public container:ViewContainerRef){

}
}
