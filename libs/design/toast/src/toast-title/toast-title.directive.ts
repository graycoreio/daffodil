import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffToastTitle]',
})

export class DaffToastTitleDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-toast__title') class = true;
}
