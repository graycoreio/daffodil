import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  daffProvideProductMagentoExtraProductTransforms,
  MagentoProductTypeEnum,
  daffProvideProductMagentoExtraProductFragments,
  daffProvideProductMagentoExtraProductPreviewTransforms,
} from '@daffodil/product/driver/magento';

import { magentoBundledProductFragment } from './fragments/bundled-product';
import { MagentoBundledProduct } from './public_api';
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
        ...daffProvideProductMagentoExtraProductFragments(magentoBundledProductFragment),
        ...daffProvideProductMagentoExtraProductTransforms<MagentoBundledProduct>(
          (daffProduct, magentoProduct) =>
            magentoProduct.__typename === MagentoProductTypeEnum.BundledProduct
              ? transformMagentoBundledProduct(daffProduct, magentoProduct)
              : daffProduct,
        ),
        // stub out composite fields for a preview
        ...daffProvideProductMagentoExtraProductPreviewTransforms<MagentoBundledProduct>(
          (daffProduct, magentoProduct) =>
            magentoProduct.__typename === MagentoProductTypeEnum.BundledProduct
              ? {
                ...daffProduct,
                items: [],
                price: 0,
                discount: {
                  amount: 0,
                  percent: 0,
                },
              }
              : daffProduct,
        ),
      ],
    };
  }
}
