import {
  InjectionToken,
  Provider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { DaffInMemoryProductResponseExtraTransform } from '../../../interfaces/public_api';

/**
 * A multi-provider injection token for providing extra transform logic in the Product In-Memory driver.
 * It is run after the standard transforms and passed both the current transformed Daffodil response and the In-Memory product response.
 */
export const DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS = new InjectionToken<DaffInMemoryProductResponseExtraTransform[]>(
  'DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS',
  { factory: () => []},
);

/**
 * Provides extra product transforms for the In-Memory product driver.
 *
 * See {@link DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideProductInMemoryExtraProductResponseTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function daffProvideProductInMemoryExtraProductResponseTransforms(...transforms: DaffInMemoryProductResponseExtraTransform[]): Provider[] {
  return transforms.map(transform => ({
    provide: DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
    useValue: transform,
    multi: true,
  }));
}
