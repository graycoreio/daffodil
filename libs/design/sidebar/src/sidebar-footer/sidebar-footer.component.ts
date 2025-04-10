import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

/**
 * Sidebar footer is a child component of the sidebar that is used to display a
 * footer container, positioned at the bottom of a sidebar.
 *
 * ```html
 * <daff-sidebar-footer></daff-sidebar-footer>
 * ```
 */
@Component({
  selector: 'daff-sidebar-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./sidebar-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffSidebarFooterComponent {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-sidebar-footer') class = true;
}
