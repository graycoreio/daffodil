import { DaffBreadcrumbItemComponent } from '../public_api';
import { DaffBreadcrumbRender } from './breadcrumb-render.type';

/**
 * Determines whether a breadcrumb item should be rendered in the breadcrumb trail.
 * Returns a {@link DaffBreadcrumbRender} when the item should be visible,
 * or `null` when the item should be collapsed into a menu.
 *
 * When there are fewer than 5 items, all items are rendered.
 * Otherwise, only the first 2 and last 2 items are rendered.
 */
export const toRenderType = (item: DaffBreadcrumbItemComponent, length: number, index: number): DaffBreadcrumbRender | null => {
  if(length < 5) {
    return { item, type: 'breadcrumb' };
  }

  switch(index) {
    case 0:
    case 1:
    case length - 1:
    case length - 2:
      return { item, type: 'breadcrumb' };
    default:
      return null;
  }
};
