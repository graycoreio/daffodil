import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffFeatureSubheader]',
})
export class DaffFeatureSubheaderDirective {

	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-feature__subheader') class = true;
}
