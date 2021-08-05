import {Component} from '@angular/core'

@Component({
	
selector:'hello',
template:` <button (click)="display()">Click Me</button>`

}) 
export class HelloWorldComponent
{
	display() {   
		var num:number = 5
		var i:number=0
		 for(i=0;i<num;i++)
			 console.log(i)
    }
	
} 