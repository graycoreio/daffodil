import { Provider } from '@angular/core';

import { provideDaffProductDriver } from '@daffodil/product/driver';

import { DaffShopifyProductService } from './product.service';

/**
 * Provides the Shopify product driver.
 *
 * @returns Array of Angular providers for the Shopify product driver
 */
export const provideDaffProductShopifyDriver = (): Provider[] => [
  DaffShopifyProductService,
  provideDaffProductDriver(DaffShopifyProductService),
];
