import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  MagentoProductTypeEnum,
} from '@daffodil/product/driver/magento';

import { magentoConfigurableProductFragment } from './fragments/configurable-product';
import { transformMagentoConfigurableProduct } from './transforms/configurable-product-transformers';

/**
 * A module that provides the product fragment for configurable products along with a configurable product transformer.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffConfigurableProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffConfigurableProductMagentoDriverModule> {
    return {
      ngModule: DaffConfigurableProductMagentoDriverModule,
      providers: [
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
          useValue: magentoConfigurableProductFragment,
          multi: true,
        },
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS,
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
          useValue(daffProduct, magentoProduct) {
            return magentoProduct.__typename === MagentoProductTypeEnum.ConfigurableProduct
              ? transformMagentoConfigurableProduct(daffProduct, magentoProduct)
              : daffProduct;
          },
          multi: true,
        },
      ],
    };
  }
}
