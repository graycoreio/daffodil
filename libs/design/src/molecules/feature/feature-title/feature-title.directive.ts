import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffFeatureTitle]'
})
export class DaffFeatureTitleDirective {

	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-feature__title') class = true;
}
