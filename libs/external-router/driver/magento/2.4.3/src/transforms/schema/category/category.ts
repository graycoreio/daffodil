import { MagentoCategoryRoute } from '@daffodil/external-router/driver/magento';

import { transformMagentoProductSchema } from '../product/product';

export const transformMagentoCategorySchema = (resolution: MagentoCategoryRoute): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: resolution.products.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index,
    item: transformMagentoProductSchema({
      ...item,
      meta_description: undefined,
      stock_status: undefined,
    }),
  })),
});
