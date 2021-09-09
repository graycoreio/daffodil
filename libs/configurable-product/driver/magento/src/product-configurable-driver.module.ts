import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  daffProvideProductMagentoExtraProductFragments,
  daffProvideProductMagentoExtraProductPreviewTransforms,
  daffProvideProductMagentoExtraProductResponseTransforms,
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
export class DaffProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductMagentoDriverModule> {
    return {
      ngModule: DaffProductMagentoDriverModule,
      providers: [
        ...daffProvideProductMagentoExtraProductFragments(magentoConfigurableProductFragment),
        ...daffProvideProductMagentoExtraProductPreviewTransforms(transformMagentoConfigurableProduct),
      ],
    };
  }
}
