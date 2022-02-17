import { DaffCategory } from '@daffodil/category';

import { DAFF_SEARCH_CATEGORY_RESULT_KIND } from '../constants/public_api';
import { DaffSearchCategoryResult } from '../models/public_api';

/**
 * Transforms a list of categories into a list of category search results.
 */
export const daffTransformCategoriesToSearchResults = (categories: DaffCategory[]): DaffSearchCategoryResult[] =>
  categories.map(category => ({
    kind: DAFF_SEARCH_CATEGORY_RESULT_KIND,
    identifier: category.id,
    id: category.id,
    url: category.url,
    name: category.name,
    description: category.description,
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: category.product_ids.map((productId, index) => ({
        '@type': 'ListItem',
        position: index,
        item: {
          '@type': 'Product',
          identifier: productId,
          id: productId,
        },
      })),
    },
  }));
