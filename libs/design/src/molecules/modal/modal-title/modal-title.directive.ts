import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffModalTitle]',
})
export class DaffModalTitleDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-modal-title') class = true;
}
