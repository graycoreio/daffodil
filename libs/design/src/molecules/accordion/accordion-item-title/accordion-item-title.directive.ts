import { Directive } from '@angular/core';

@Directive({
  selector: '[daffAccordionItemTitle]',
  host: {
    'class': 'daff-accordion-item__title'
  }
})
export class DaffAccordionItemTitleDirective{}
