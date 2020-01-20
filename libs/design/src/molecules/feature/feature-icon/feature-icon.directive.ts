import { Directive, HostBinding } from '@angular/core';

@Directive ({
  selector: '[daffFeatureIcon]',
})
export class DaffFeatureIconDirective {

  @HostBinding('class.daff-feature__icon') class = true;
}
