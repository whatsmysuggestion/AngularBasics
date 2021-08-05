import {Component} from '@angular/core'

@Component({	
selector:'hello',
template:` <button (click)="display()">Click Me</button>`
}) 
export class HelloWorldComponent
{
	display() {   
		 var str = new String( "whatsmysuggestion" ); 
			console.log("str.constructor is:" + str.length)
			console.log("str.constructor is:" + str.toUpperCase())
			console.log("str.constructor is:" + str.toLowerCase())
			console.log("str.constructor is:" + str.concat("Hi"))
			console.log("str.constructor is:" + str.charCodeAt(1))
			console.log("str.constructor is:" + str.indexOf("s"))
			console.log("str.constructor is:" + str.lastIndexOf("s"))
			console.log("str.constructor is:" + str.substring(1,4))
			console.log("str.constructor is:" + str.substr(1,4))
		 
    }
	
} 