import {
  InjectionToken,
  Provider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { DaffMagentoProductResponseExtraTransform } from '../../../interfaces/public_api';
import { MagentoProduct } from '../../../models/public_api';

/**
 * A multi-provider injection token for providing extra transform logic in the Product Magento driver.
 * It is run after the standard transforms and passed both the current transformed Daffodil response and the Magento product response.
 */
export const DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS = new InjectionToken<DaffMagentoProductResponseExtraTransform[]>(
  'DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS',
  { factory: () => []},
);

/**
 * Provides extra product transforms for the Magento product driver.
 *
 * See {@link DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideProductMagentoExtraProductResponseTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function daffProvideProductMagentoExtraProductResponseTransforms<T extends MagentoProduct = MagentoProduct, V extends DaffProductDriverResponse = DaffProductDriverResponse>(...transforms: DaffMagentoProductResponseExtraTransform<T, V>[]): Provider[] {
  return transforms.map(transform => ({
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
    useValue: transform,
    multi: true,
  }));
}
