import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductInMemoryExtraProductResponseTransforms } from '@daffodil/product/driver/in-memory';
import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

import { transformInMemoryRelatedProducts } from './transforms/product-response.service';

/**
 * Provides the related product fields to the product extension factory.
 */
export const provideDaffRelatedProductsInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraProductFactories(DaffRelatedProductFactory),
  provideDaffProductInMemoryExtraProductResponseTransforms(transformInMemoryRelatedProducts),
]);
