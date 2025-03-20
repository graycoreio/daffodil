import { DaffBreadcrumbItemDirective } from '../public_api';

export interface DaffBreadcrumbRenderCrumb {
  item: DaffBreadcrumbItemDirective;
  type: 'breadcrumb';
}

export interface DaffBreadcrumbRenderMenu {
  type: 'menu';
  target: 'full' | 'partial';
}

export type DaffBreadcrumbRender = DaffBreadcrumbRenderCrumb | DaffBreadcrumbRenderMenu;
