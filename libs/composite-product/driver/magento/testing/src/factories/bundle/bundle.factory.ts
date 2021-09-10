import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProductTypeEnum,
  MagentoBundledProduct,
} from '@daffodil/product/driver/magento';
import { MockMagentoCoreProduct } from '@daffodil/product/driver/magento/testing';


export class MockMagentoBundledProduct extends MockMagentoCoreProduct implements MagentoBundledProduct {
  __typename = MagentoProductTypeEnum.BundledProduct;
  items = [];
}

/**
 * A factory for creating stub data for {@link MagentoBundledProduct}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoBundledProductFactory extends DaffModelFactory<MagentoBundledProduct> {

  constructor(){
    super(MockMagentoBundledProduct);
  }
}
