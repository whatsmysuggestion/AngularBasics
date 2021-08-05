import {Component} from '@angular/core'

@Component({
	
selector:'hello',
template:`{{name|lowercase}}`

}) 
export class HelloWorldComponent
{
  
   constructor()
  {
  this.name="hello";
  }
	
} 