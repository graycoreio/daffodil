import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffAccordionItemContent]',
})
export class DaffAccordionItemContentDirective {

	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-accordion-item__content') class = true;
}
