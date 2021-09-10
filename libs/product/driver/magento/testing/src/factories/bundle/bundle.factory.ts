import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProductTypeEnum,
  MagentoBundledProduct,
} from '@daffodil/product/driver/magento';

import { MockMagentoCoreProduct } from '../core/product.factory';

export class MockMagentoBundledProduct extends MockMagentoCoreProduct implements MagentoBundledProduct {
  __typename = MagentoProductTypeEnum.BundledProduct;
  items = [];
}

/**
 * A factory for creating stub data for {@link MagentoBundledProduct}s.
 *
 * @deprecated import from @daffodil/composite-product/driver/magento/testing instead.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoBundledProductFactory extends DaffModelFactory<MagentoBundledProduct> {

  constructor(){
    super(MockMagentoBundledProduct);
  }
}
