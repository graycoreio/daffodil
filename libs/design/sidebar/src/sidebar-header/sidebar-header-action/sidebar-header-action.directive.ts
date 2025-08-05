import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated in favor of the `dismissible` property on `DaffSidebarHeaderComponent`.
 */
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
