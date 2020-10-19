import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffCardImage]'
})
export class DaffCardImageDirective {
	
	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-card__image') class = true;
}