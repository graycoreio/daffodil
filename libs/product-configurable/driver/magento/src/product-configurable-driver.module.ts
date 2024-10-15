import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffProductMagentoExtraProductFragments,
  provideDaffProductMagentoExtraProductPreviewTransforms,
  provideDaffProductMagentoExtraProductTransforms,
  MagentoProductTypeEnum,
} from '@daffodil/product/driver/magento';

import { magentoConfigurableProductFragment } from './fragments/configurable-product';
import { MagentoConfigurableProduct } from './models/configurable-product';
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
        ...provideDaffProductMagentoExtraProductFragments(magentoConfigurableProductFragment),
        ...provideDaffProductMagentoExtraProductTransforms<MagentoConfigurableProduct>(
          (daffProduct, magentoProduct) =>
            magentoProduct.__typename === MagentoProductTypeEnum.ConfigurableProduct
              ? transformMagentoConfigurableProduct(daffProduct, magentoProduct)
              : daffProduct,
        ),
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
      ],
    };
  }
}
