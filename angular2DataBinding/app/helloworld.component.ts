import {Component} from '@angular/core'

@Component({
	
selector:'hello',
templateUrl: 'app/display.html'

}) 
export class HelloWorldComponent
{
 appTitle: string = 'Welcome';
   appList: any[] = [ {
      "ID": "1",
      "url": 'app/img/a.png'
   },

   {
      "ID": "2",
      "url": 'app/img/g.png'
   } ];
	
} 
