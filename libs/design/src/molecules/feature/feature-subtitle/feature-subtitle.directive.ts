import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffFeatureSubtitle]'
})
export class DaffFeatureSubtitleDirective {

	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-feature__subtitle') class = true;
}
