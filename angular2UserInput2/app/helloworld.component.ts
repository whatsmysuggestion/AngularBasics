import {Component} from '@angular/core';  

@Component ({ 
   selector: 'hello', 
   template: `
    <input #box (keyup)="0">
    <p>{{box.type}} {{box.value}}</p>
  `
})

export class HelloWorldComponent
{
	
} 

