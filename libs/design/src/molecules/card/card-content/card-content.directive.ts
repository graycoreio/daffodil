import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCardContent]',
})
export class DaffCardContentDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card__content') class = true;
}
