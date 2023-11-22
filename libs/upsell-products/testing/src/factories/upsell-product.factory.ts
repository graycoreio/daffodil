import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  MockProduct,
  DaffProductKindFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';

/**
 * Mocked DaffUpsellProduct object.
 */
export class MockUpsellProduct extends MockProduct implements DaffUpsellProduct {
  upsell: DaffProduct[] = [];

  constructor(
    productFactory: DaffProductKindFactory,
    imageFactory: DaffProductImageFactory,
  ) {
    super(imageFactory);

    this.upsell = productFactory.createMany(3);
  }
}

/**
 * Factory for creating DaffUpsellProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffUpsellProductFactory extends DaffModelFactory<DaffUpsellProduct>{
  constructor(
    productKindFactory: DaffProductKindFactory,
    imageFactory: DaffProductImageFactory,
  ) {
    super(MockUpsellProduct, productKindFactory, imageFactory);
  }
}
