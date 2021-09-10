import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS,
  MagentoProductTypeEnum,
} from '@daffodil/product/driver/magento';

import { magentoBundledProductFragment } from './fragments/bundled-product';
import { transformMagentoBundledProduct } from './transforms/bundled-product-transformers';

/**
 * A module that provides the product fragment for composite products along with a composite product transformer.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCompositeProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCompositeProductMagentoDriverModule> {
    return {
      ngModule: DaffCompositeProductMagentoDriverModule,
      providers: [
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
          useValue: magentoBundledProductFragment,
          multi: true,
        },
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS,
          useValue: (daffProduct, magentoProduct) => magentoProduct.__typename === MagentoProductTypeEnum.BundledProduct
            ? transformMagentoBundledProduct(daffProduct, magentoProduct)
            : daffProduct,
          multi: true,
        },
      ],
    };
  }
}
