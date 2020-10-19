import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffAccordionItemTitle]',
})
export class DaffAccordionItemTitleDirective {
	
	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-accordion-item__title') class = true;
}
