import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCardMedia]',
})
export class DaffCardMediaDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card__media') class = true;
}
