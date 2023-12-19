import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCardIcon]',
})
export class DaffCardIconDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card__icon') class = true;
}
