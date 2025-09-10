import { Provider } from '@angular/core';

import { provideDaffProductDriver } from '@daffodil/product/driver';

import { DaffProductMedusaService } from './product-driver.service';

/**
 * Provides the complete Medusa product driver with configuration.
 *
 * @param config - The Medusa configuration object
 * @returns Array of Angular providers for the Medusa driver
 */
export const provideDaffProductMedusaDriver = (): Provider[] => [
  provideDaffProductDriver(DaffProductMedusaService),
];
