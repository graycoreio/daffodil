import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffSidebarHeaderAction]',
  standalone: true,
})
export class DaffSidebarHeaderActionDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-sidebar-header__action') class = true;
}
