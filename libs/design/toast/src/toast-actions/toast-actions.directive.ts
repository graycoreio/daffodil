import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffToastActions]',
})

export class DaffToastActionsDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-toast__actions') class = true;
}
