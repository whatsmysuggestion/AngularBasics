import { Component, EventEmitter, Input, Output } 
from '@angular/core';  

@Component ({ 
   selector: 'hello', 
   template: `
    <h4>{{voted}}</h4>
    <button (click)="vote(true)" [name]="ujjwal" 
	[disabled]="voted">Agree</button>
    <button (click)="vote(false)" 
	[disabled]="voted">Disagree</button>
  `
})

export class HelloWorldComponent
{
  @Input()  name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  ujjwal="ujjwal";
 
  vote(agreed: boolean) {
   this.onVoted.emit(agreed);
    this.voted = agreed;
  }
} 

