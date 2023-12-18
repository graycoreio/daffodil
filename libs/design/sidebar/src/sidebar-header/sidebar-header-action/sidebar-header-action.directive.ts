import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffSidebarHeaderAction]',
})
export class DaffSidebarHeaderActionDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-sidebar-header__action') class = true;
}
