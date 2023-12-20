import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated
 */
@Directive({
  selector: '[daffListSubheader]',
})
export class DaffListSubheaderDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-list__subheader') class = true;
}
