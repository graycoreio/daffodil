import { DaffBreadcrumbItemComponent } from '../public_api';

export interface DaffBreadcrumbRenderCrumb {
  item: DaffBreadcrumbItemComponent;
  type: 'breadcrumb';
}

export interface DaffBreadcrumbRenderMenu {
  type: 'menu';
  target: 'full' | 'partial';
}

export type DaffBreadcrumbRender = DaffBreadcrumbRenderCrumb | DaffBreadcrumbRenderMenu;
