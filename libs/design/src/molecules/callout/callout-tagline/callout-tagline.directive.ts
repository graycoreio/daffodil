import {
	Directive,
	HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCalloutTagline]',
})

export class DaffCalloutTaglineDirective {

	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-callout__tagline') class = true;
}
