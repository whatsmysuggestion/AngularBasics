import {Component} from '@angular/core';  

@Component ({ 
   selector: 'hello', 
   template: ` 
      <div> 
         <input [value] = "name" (input) = "name = $event.target.value"> 
         {{name}} 
      </div> 
   `
}) 

export class HelloWorldComponent
{
	
} 

