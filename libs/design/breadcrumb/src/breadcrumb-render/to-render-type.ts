import { DaffBreadcrumbItemComponent } from '../public_api';
import { DaffBreadcrumbRender } from './breadcrumb-render.type';

export const toRenderType = (item: DaffBreadcrumbItemComponent, length: number, index: number): DaffBreadcrumbRender | DaffBreadcrumbRender[] => {
  if(index === 0) {
    return [
      { type: 'menu', target: 'full' },
      { item, type: 'breadcrumb' },
    ];
  }
  if(length < 5) {
    return { item, type: 'breadcrumb' };
  } else {
    switch(index) {
      case 1:
      case length - 1:
      case length - 2:
        return { item, type: 'breadcrumb' };
      case 2:
        return { type: 'menu', target: 'partial' };
      default:
        return [];
    }
  }
};
