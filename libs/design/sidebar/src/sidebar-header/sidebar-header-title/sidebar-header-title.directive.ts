import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffSidebarHeaderTitle]',
  standalone: true,
})
export class DaffSidebarHeaderTitleDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-sidebar-header__title') class = true;
}
