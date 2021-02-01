import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCardTitle]',
})
export class DaffCardTitleDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card__title') class = true;
}
