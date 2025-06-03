import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
  inject,
} from '@angular/core';

import {
  MagentoProductTypeEnum,
  provideDaffProductMagentoExtraProductPreviewTransforms,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
} from '@daffodil/product/driver/magento';

import { magentoBundledProductFragment } from './fragments/bundled-product';
import {
  DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_FRAGMENTS,
  DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_FRAGMENTS,
} from './injection-tokens/public_api';
import { MagentoBundledProduct } from './models/public_api';
import {
  MagentoBundledProductItemTransformer,
  MagentoBundledProductTransformer,
} from './transforms/public_api';

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
        MagentoBundledProductTransformer,
        MagentoBundledProductItemTransformer,
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
          useFactory: () => magentoBundledProductFragment(
            inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_FRAGMENTS),
            inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_FRAGMENTS),
          ),
          multi: true,
        },
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS,
          useFactory: () => {
            const transformer = inject(MagentoBundledProductTransformer);
            return (daffProduct, magentoProduct) =>
              magentoProduct.__typename === MagentoProductTypeEnum.BundledProduct
                ? transformer.transform(daffProduct, magentoProduct)
                : daffProduct;
          },
          multi: true,
        },
        // stub out composite fields for a preview
        ...provideDaffProductMagentoExtraProductPreviewTransforms<MagentoBundledProduct>(
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
