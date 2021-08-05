import {Component} from '@angular/core'

@Component({
	
selector:'hello',
templateUrl: 'app/display.html'

}) 
export class HelloWorldComponent
{
 
  List: any[] = [
  {name:'a',no:1},
  {name:'b',no:2}
     ];	
} 