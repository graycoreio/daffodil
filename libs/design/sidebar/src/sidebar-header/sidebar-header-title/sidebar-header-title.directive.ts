import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * Sidebar header title is a child directive of `DaffSidebarHeaderComponent`
 * that can be used to provide a title for the sidebar.
 *
 * ```html
 * <div daffSidebarHeaderTitle>Title</div>
 * ```
 */
@Directive({
  selector: '[daffSidebarHeaderTitle]',
})
export class DaffSidebarHeaderTitleDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-sidebar-header__title') class = true;
}
