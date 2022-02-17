import { DaffProduct } from '@daffodil/product';

import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '../constants/public_api';
import { DaffSearchProductResult } from '../models/public_api';

/**
 * Transforms a list of products into a list of product search results.
 */
export const daffTransformProductsToSearchResults = (products: DaffProduct[]): DaffSearchProductResult[] =>
  products.map(product => ({
    kind: DAFF_SEARCH_PRODUCT_RESULT_KIND,
    identifier: product.id,
    id: product.id,
    '@type': 'Product',
    '@context': 'https://schema.org',
    url: product.url,
    name: product.name,
    description: product.description,
    offers: {
      sku: product.id,
      price: product.price,
      '@type': 'Offer',
    },
    sku: product.id,
  }));
