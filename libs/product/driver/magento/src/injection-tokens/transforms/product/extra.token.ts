import {
  InjectionToken,
  Provider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';

import { DaffMagentoProductExtraTransform } from '../../../interfaces/product-preview-extra-transform.type';
import { MagentoProduct } from '../../../models/public_api';

/**
 * A multi-provider injection token for providing extra transform logic in the Product Magento driver.
 * It is run after the standard transforms for each product preview and passed both the current transformed Daffodil product and the Magento product.
 *
 * See {@link MagentoProduct} for more info.
 */
export const DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS = new InjectionToken<DaffMagentoProductExtraTransform[]>(
  'DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS',
  { factory: () => []},
);

/**
 * Provides extra product preview transforms for the Magento product driver.
 *
 * See {@link DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideProductMagentoExtraProductTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function daffProvideProductMagentoExtraProductTransforms<T extends MagentoProduct = MagentoProduct, V extends DaffProduct = DaffProduct>(...transforms: DaffMagentoProductExtraTransform<T, V>[]): Provider[] {
  return transforms.map(transform => ({
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS,
    useValue: transform,
    multi: true,
  }));
}
