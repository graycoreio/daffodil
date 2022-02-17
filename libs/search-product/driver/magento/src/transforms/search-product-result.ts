import {
  DaffSearchProductResult,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';

import { MagentoSearchProductResult } from '../models/result.interface';

export const daffSearchMagentoProductResultTransform = (magentoProductResult: MagentoSearchProductResult): DaffSearchProductResult => ({
  kind: DAFF_SEARCH_PRODUCT_RESULT_KIND,
  identifier: magentoProductResult.sku,
  id: magentoProductResult.sku,
  '@type': 'Product',
  '@context': 'https://schema.org',
  url: `/${magentoProductResult.url_key}${magentoProductResult.url_suffix}`,
  name: magentoProductResult.name,
  description: magentoProductResult.short_description.html,
  offers: {
    sku: magentoProductResult.sku,
    price: magentoProductResult.price_range.maximum_price.regular_price.value,
    '@type': 'Offer',
  },
  sku: magentoProductResult.sku,
});
