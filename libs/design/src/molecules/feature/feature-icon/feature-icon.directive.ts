import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive ({
  selector: '[daffFeatureIcon]',
})
export class DaffFeatureIconDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-feature__icon') class = true;
}
