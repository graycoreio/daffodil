import {
  InjectionToken,
  Provider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';

import { DaffMagentoProductPreviewExtraTransform } from '../../../interfaces/product-preview-extra-transform.type';

/**
 * A multi-provider injection token for providing extra transform logic in the Product Magento driver.
 * It is run after the standard transforms and passed both the current transformed Daffodil product and the Magento product.
 */
export const DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS = new InjectionToken<DaffMagentoProductPreviewExtraTransform[]>(
  'DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS',
  { factory: () => []},
);

/**
 * Provides extra product transforms for the Magento product driver.
 *
 * See {@link DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideProductMagentoExtraProductPreviewTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function daffProvideProductMagentoExtraProductPreviewTransforms(...transforms: DaffMagentoProductPreviewExtraTransform[]): Provider[] {
  return transforms.map(transform => ({
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS,
    useValue: transform,
    multi: true,
  }));
}
