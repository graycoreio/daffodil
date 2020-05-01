import { Injectable } from '@angular/core';

import {
  DaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoBundledProduct } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';

export class MockMagentoBundledProduct extends MockMagentoCoreProduct implements MagentoBundledProduct {
  __typename = MagentoProductTypeEnum.BundledProduct;
  items = [];
}

@Injectable({
  providedIn: 'root'
})
export class MagentoBundledProductFactory extends DaffModelFactory<MagentoBundledProduct> {

  constructor(){
    super(MockMagentoBundledProduct);
  }
}
