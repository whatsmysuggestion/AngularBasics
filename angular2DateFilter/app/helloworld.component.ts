import {Component} from '@angular/core'

@Component({
	
selector:'hello',
template:`{{data|currency}}`

}) 
export class HelloWorldComponent
{
  data=10;
	
} 
 