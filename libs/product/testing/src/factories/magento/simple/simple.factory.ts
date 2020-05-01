import { Injectable } from '@angular/core';

import {
  DaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoSimpleProduct } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';

export class MockMagentoSimpleProduct extends MockMagentoCoreProduct implements MagentoSimpleProduct {
	__typename = MagentoProductTypeEnum.SimpleProduct;
}

@Injectable({
  providedIn: 'root'
})
export class MagentoSimpleProductFactory extends DaffModelFactory<MagentoSimpleProduct> {

  constructor(){
    super(MockMagentoSimpleProduct);
  }
}
