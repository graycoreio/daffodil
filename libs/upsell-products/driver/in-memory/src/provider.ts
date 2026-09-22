import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductInMemoryExtraProductResponseTransforms } from '@daffodil/product/driver/in-memory';
import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

import { transformInMemoryUpsellProducts } from './transforms/product-response.service';

/**
 * Provides the upsell product fields to the product extension factory.
 */
export const provideDaffUpsellProductsInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraProductFactories(DaffUpsellProductFactory),
  provideDaffProductInMemoryExtraProductResponseTransforms(transformInMemoryUpsellProducts),
]);
