import { Injectable } from '@angular/core';

import {
  DaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoConfigurableProduct } from '@daffodil/product';

import { MockMagentoCoreProduct } from '../core/product.factory';

export class MockMagentoConfigurableProduct extends MockMagentoCoreProduct implements MagentoConfigurableProduct {
  __typename = MagentoProductTypeEnum.ConfigurableProduct;
	configurable_options = [];
	variants = [];
}

@Injectable({
  providedIn: 'root'
})
export class MagentoConfigurableProductFactory extends DaffModelFactory<MagentoConfigurableProduct> {

  constructor(){
    super(MockMagentoConfigurableProduct);
  }
}
