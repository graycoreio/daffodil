import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductTypeEnum } from '@daffodil/product';
import {
  DaffProductImageFactory,
  DaffProductCustomAttributeValueFactory,
  MockProduct,
} from '@daffodil/product/testing';
import { DaffCompositeProduct } from '@daffodil/product-composite';

import { DaffCompositeProductItemFactory } from './composite-product-item.factory';

/**
 * Mocked DaffCompositeProduct object.
 */
export class MockCompositeProduct extends MockProduct implements DaffCompositeProduct {
  type = DaffProductTypeEnum.Composite;
  items = this.itemFactory.createMany(2);

  constructor(
    protected itemFactory: DaffCompositeProductItemFactory,
    imageFactory: DaffProductImageFactory,
    customAttributeFactory: DaffProductCustomAttributeValueFactory,
  ) {
    super(imageFactory, customAttributeFactory);
  }
}

/**
 * Factory for creating DaffCompositeProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCompositeProductFactory extends DaffModelFactory<DaffCompositeProduct, typeof MockCompositeProduct>{
  constructor(
    itemFactory: DaffCompositeProductItemFactory,
    imageFactory: DaffProductImageFactory,
    customAttributeFactory: DaffProductCustomAttributeValueFactory,
  ) {
    super(MockCompositeProduct, itemFactory, imageFactory, customAttributeFactory);
  }
}
