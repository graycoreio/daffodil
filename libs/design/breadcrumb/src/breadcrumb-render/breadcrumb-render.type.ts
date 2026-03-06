import { DaffBreadcrumbItemComponent } from '../public_api';

export interface DaffBreadcrumbRenderItem {
  item: DaffBreadcrumbItemComponent;
  type: 'breadcrumb';
}

export interface DaffBreadcrumbRenderMenu {
  type: 'menu';
  target: 'mobileMenu' | 'desktopMenu';
}

export type DaffBreadcrumbRender = DaffBreadcrumbRenderItem | DaffBreadcrumbRenderMenu;
