import { Directive } from '@angular/core';

@Directive({
  selector: '[daffAccordionItemContent]',
  host: {
    'class': 'daff-accordion-item__content'
  }
})
export class DaffAccordionItemContentDirective {}
