import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated in favor of the `dismissible` property on `DaffSidebarHeaderComponent`. Deprecated in version 0.88.0. Will be removed in version 0.91.0.
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
