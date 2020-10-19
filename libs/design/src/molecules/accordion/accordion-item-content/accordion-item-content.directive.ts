import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffAccordionItemContent]',
})
export class DaffAccordionItemContentDirective {

  @HostBinding('class.daff-accordion-item__content') private class = true;
}
