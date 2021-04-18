import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffCardActions]',
})
export class DaffCardActionsDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card__actions') class = true;
}
