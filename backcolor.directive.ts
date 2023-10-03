import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackcolor]'
})
export class BackcolorDirective {

  constructor(e1:ElementRef) {
    e1.nativeElement.style.backgroundColor="green";
   }

}
