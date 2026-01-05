import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { DaffSidebarHeaderTitleDirective } from './sidebar-header/sidebar-header-title/sidebar-header-title.directive';
import { DaffSidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';

/**
 * @docs-private
 */
export const DAFF_SIDEBAR_COMPONENTS = <const> [
  DaffSidebarComponent,
  DaffSidebarViewportComponent,
  DaffSidebarHeaderComponent,
  DaffSidebarFooterComponent,
  DaffSidebarHeaderTitleDirective,
];
