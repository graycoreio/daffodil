import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProductTypeEnum,
  MagentoSimpleProduct,
} from '@daffodil/product/driver/magento';

import { MockMagentoCoreProduct } from '../core/product.factory';

export class MockMagentoSimpleProduct extends MockMagentoCoreProduct implements MagentoSimpleProduct {
  __typename = MagentoProductTypeEnum.SimpleProduct;
}

/**
 * A factory for creating stub data for {@link MagentoSimpleProduct}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoSimpleProductFactory extends DaffModelFactory<MagentoSimpleProduct> {

  constructor(){
    super(MockMagentoSimpleProduct);
  }
}
