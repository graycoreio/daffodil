import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffSidebarHeaderTitle]',
})
export class DaffSidebarHeaderTitleDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-sidebar-header__title') class = true;
}
