import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DaffProductTypeEnum,
  DaffProduct,
} from '@daffodil/product';
import { DaffCompositeProduct } from '@daffodil/product-composite';

import { DAFF_PRODUCT_COMPOSITE_MAGENTO_ITEM_TRANSFORM } from '../injection-tokens/transforms/item/token';
import { MagentoBundleProductItemTransform } from '../interfaces/public_api';
import { MagentoBundledProduct } from '../models/bundled-product';

@Injectable()
export class MagentoBundledProductTransformer {
  constructor(
    @Inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_ITEM_TRANSFORM) private itemTransform: MagentoBundleProductItemTransform,
  ) {}

  /**
   * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
   *
   * @param response the response from a magento product query.
   */
  transform(
    daffProduct: DaffProduct,
    { items }: MagentoBundledProduct,
  ): DaffCompositeProduct {
    return {
      ...daffProduct,
      ...items.length > 0 ? {
        price: 0,
        discount: {
          amount: 0,
          percent: 0,
        },
      } : {},
      type: DaffProductTypeEnum.Composite,
      items: items.map(this.itemTransform),
    };
  }
}
