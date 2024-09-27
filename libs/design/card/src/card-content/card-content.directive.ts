import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCardContent]',
  standalone: true,
})
export class DaffCardContentDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card__content') class = true;
}
