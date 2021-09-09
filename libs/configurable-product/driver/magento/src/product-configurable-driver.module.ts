import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM,
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
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
          useValue: magentoConfigurableProductFragment,
          multi: true,
        },
        {
          provide: DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM,
          useValue: transformMagentoConfigurableProduct,
          multi: true,
        },
      ],
    };
  }
}
