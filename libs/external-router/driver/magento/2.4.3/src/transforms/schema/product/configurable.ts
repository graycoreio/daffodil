import { MagentoProductRoute } from '@daffodil/external-router/driver/magento';

import { transformMagentoBaseProduct } from './base';

export const transformMagentoConfigurableProduct = (resolution: MagentoProductRoute): Record<string, unknown> => ({
  ...transformMagentoBaseProduct(resolution),
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: resolution.price_range.minimum_price.final_price.value,
    highPrice: resolution.price_range.maximum_price.final_price.value,
    priceCurrency: resolution.price_range.maximum_price.final_price.currency,
  },
});
