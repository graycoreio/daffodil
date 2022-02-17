import {
  DaffSearchCategoryResult,
  DAFF_SEARCH_CATEGORY_RESULT_KIND,
} from '@daffodil/search-category';

import { MagentoSearchCategoryResult } from '../models/public_api';

export const magentoSearchCategoryResultTransform = (category: MagentoSearchCategoryResult): DaffSearchCategoryResult => ({
  kind: DAFF_SEARCH_CATEGORY_RESULT_KIND,
  identifier: category.uid,
  id: category.uid,
  url: `/${category.url_path}${category.url_suffix}`,
  name: category.name,
  description: category.description,
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: category.products.items.map((product, index) => ({
      '@type': 'ListItem',
      position: index,
      item: {
        '@type': 'Product',
        identifier: product.sku,
        id: product.sku,
      },
    })),
  },
});
