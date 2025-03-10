import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffToastMessage]',
})

export class DaffToastMessageDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-toast__message') class = true;
}
