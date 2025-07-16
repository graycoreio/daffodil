import { MagentoRoute } from '@daffodil/external-router/driver/magento';

import { clientifyUrlPath } from './schema/clientify-url-path';

export const transformClientUrls = <T extends MagentoRoute>(route: T, origin: string) => {
  if(!route) {
    return route;
  }

  switch(route.type) {
    case 'CATEGORY':
      return {
        ...route,
        canonical_url: clientifyUrlPath(route.canonical_url, origin),
        products: {
          items: route.products.items.map((product) => ({
            ...product,
            canonical_url: clientifyUrlPath(product.canonical_url, origin),
          })),
        },
      };
    case 'PRODUCT':
      return {
        ...route,
        canonical_url: clientifyUrlPath(route.canonical_url, origin),
      };
    default:
      return route;
  }
};
