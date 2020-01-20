import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffFeatureSubheader]',
})
export class DaffFeatureSubheaderDirective {

  @HostBinding('class.daff-feature__subheader') class = true;
}
