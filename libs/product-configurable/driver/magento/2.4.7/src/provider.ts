import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  inject,
} from '@angular/core';

import {
  provideDaffProductMagentoExtraProductPreviewTransforms,
  MagentoProductTypeEnum,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
} from '@daffodil/product/driver/magento';

import { magentoConfigurableProductFragment } from './fragments/configurable-product';
import { DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_FRAGMENTS } from './injection-tokens/public_api';
import { MagentoConfigurableProduct } from './models/configurable-product';
import { MagentoConfigurableProductTransformer } from './transforms/configurable-product-transformers';

/**
 * Provides the product fragment for configurable products along with a configurable product transformer.
 */
export const provideDaffProductConfigurableMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  MagentoConfigurableProductTransformer,
  {
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
    multi: true,
    useFactory: () =>
      magentoConfigurableProductFragment(inject(DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_FRAGMENTS)),
  },
  {
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS,
    multi: true,
    useFactory: () => {
      const transformer = inject(MagentoConfigurableProductTransformer);
      return (daffProduct, magentoProduct) =>
        magentoProduct.__typename === MagentoProductTypeEnum.ConfigurableProduct
          ? transformer.transform(daffProduct, magentoProduct)
          : daffProduct;
    },
  },
  // stub out configurable fields for a preview
  ...provideDaffProductMagentoExtraProductPreviewTransforms<MagentoConfigurableProduct>(
    (daffProduct, magentoProduct) =>
      magentoProduct.__typename === MagentoProductTypeEnum.ConfigurableProduct
        ? {
          ...daffProduct,
          variants: [],
          configurableAttributes: [],
        }
        : daffProduct,
  ),
]);
