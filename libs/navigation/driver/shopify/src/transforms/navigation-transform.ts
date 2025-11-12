import {
  getShopifyRoutePath,
  ShopifyMenu,
  ShopifyMenuItem,
} from '@daffodil/driver/shopify';
import { DaffNavigationTree } from '@daffodil/navigation';

/**
 * Transforms a Shopify menu item to a DaffNavigationTree recursively.
 */
export const transformShopifyMenuItemToNavTree = (item: ShopifyMenuItem): DaffNavigationTree => ({
  id: item.id,
  name: item.title,
  breadcrumbs: [],
  url: getShopifyRoutePath(item.type, item.resource?.handle),
  children: item.items?.map((subItem: ShopifyMenuItem) => transformShopifyMenuItemToNavTree(subItem)) || [],
});

/**
 * Transforms a Shopify menu to a DaffNavigationTree.
 */
export const transformShopifyMenuToNavTree = (menu: ShopifyMenu | null): DaffNavigationTree => {
  if (!menu) {
    return {
      id: 'root',
      name: 'Navigation',
      url: '/',
      breadcrumbs: [],
      children: [],
    };
  }

  return {
    id: menu.id,
    name: menu.title,
    url: '/',
    breadcrumbs: [],
    children: menu.items?.map((item: ShopifyMenuItem) => transformShopifyMenuItemToNavTree(item)) || [],
  };
};
