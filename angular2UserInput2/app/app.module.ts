import {BrowserModule} from '@angular/platform-browser';
import {HelloWorldComponent} from './helloworld.component';
import {NgModule} from '@angular/core';

@NgModule ({
   imports: [BrowserModule],
   declarations: [HelloWorldComponent],
   bootstrap: [HelloWorldComponent]
})
export class AppModule
{
	

}
