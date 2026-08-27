import { Provider } from '@angular/core';

import {
  provideDaffProductDriver,
  provideDaffProductCustomAttributeDriver,
} from '@daffodil/product/driver';

import { DaffShopifyProductCustomAttributeService } from './custom-attribute.service';
import { DaffShopifyProductService } from './product.service';

/**
 * Provides the Shopify product driver.
 *
 * @returns Array of Angular providers for the Shopify product driver
 */
export const provideDaffProductShopifyDriver = (): Provider[] => [
  DaffShopifyProductService,
  provideDaffProductDriver(DaffShopifyProductService),
  DaffShopifyProductCustomAttributeService,
  provideDaffProductCustomAttributeDriver(DaffShopifyProductCustomAttributeService),
];
