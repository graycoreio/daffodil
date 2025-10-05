import {
  Menu,
  MenuItem,
  Collection,
} from '@daffodil/driver/shopify';
import { DaffNavigationTree } from '@daffodil/navigation';

/**
 * Extracts the path from a full URL, returning just the path with a leading slash.
 */
const extractPathFromUrl = (url: string | null): string => {
  if (!url) {
    return '';
  }

  try {
    const urlObj = new URL(url);
    return urlObj.pathname;
  } catch {
    // If URL parsing fails, assume it's already a path
    return url.startsWith('/') ? url : `/${url}`;
  }
};

/**
 * Transforms a Shopify menu item to a DaffNavigationTree recursively.
 */
export const transformShopifyMenuItemToNavTree = (item: MenuItem): DaffNavigationTree => ({
  id: item.id,
  name: item.title,
  url: extractPathFromUrl(item.url),
  breadcrumbs: [],
  children: item.items?.map((subItem: MenuItem) => transformShopifyMenuItemToNavTree(subItem)) || [],
});

/**
 * Transforms a Shopify menu to a DaffNavigationTree.
 */
export const transformShopifyMenuToNavTree = (menu: Menu | null): DaffNavigationTree => {
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
    children: menu.items?.map((item: MenuItem) => transformShopifyMenuItemToNavTree(item)) || [],
  };
};
