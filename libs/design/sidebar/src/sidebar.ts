import { DaffSidebarComponent } from './sidebar/sidebar.component';
import { DaffSidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { DaffSidebarHeaderActionDirective } from './sidebar-header/sidebar-header-action/sidebar-header-action.directive';
import { DaffSidebarHeaderTitleDirective } from './sidebar-header/sidebar-header-title/sidebar-header-title.directive';
import { DaffSidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { DaffSidebarViewportComponent } from './sidebar-viewport/sidebar-viewport.component';
import { DaffSidebarViewportBackdropComponent } from './sidebar-viewport-backdrop/sidebar-viewport-backdrop.component';

export const DAFF_SIDEBAR_COMPONENTS = <const> [
  DaffSidebarComponent,
  DaffSidebarViewportComponent,
  DaffSidebarHeaderComponent,
  DaffSidebarFooterComponent,
  DaffSidebarHeaderTitleDirective,
  DaffSidebarHeaderActionDirective,
  DaffSidebarViewportBackdropComponent,
];
