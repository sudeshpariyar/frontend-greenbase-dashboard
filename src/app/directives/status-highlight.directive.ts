import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStatusHighlight]',
})
export class StatusHighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
