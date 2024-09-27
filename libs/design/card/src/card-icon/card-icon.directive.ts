import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCardIcon]',
  standalone: true,
})
export class DaffCardIconDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card__icon') class = true;
}
