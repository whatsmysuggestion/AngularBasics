import {Component} from '@angular/core'

@Component({
	
selector:'hello',
template:` <button (click)="display()">Click Me</button>`

}) 
export class HelloWorldComponent
{
	display() {   
		var num:number = 5
		if (num > 0) { 
		console.log("number is positive") 
		}
		else
		{
		console.log("number is not positive") 
		}
    }
	
} 