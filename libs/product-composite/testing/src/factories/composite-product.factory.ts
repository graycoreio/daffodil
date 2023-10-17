import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductTypeEnum } from '@daffodil/product';
import { MockProduct } from '@daffodil/product/testing';
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
  ) {
    super();
  }
}

/**
 * Factory for creating DaffCompositeProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCompositeProductFactory extends DaffModelFactory<DaffCompositeProduct>{
  constructor(
    itemFactory: DaffCompositeProductItemFactory,
  ) {
    super(MockCompositeProduct, itemFactory);
  }
}
