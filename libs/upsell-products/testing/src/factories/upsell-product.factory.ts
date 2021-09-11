import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  MockProduct,
  DaffProductKindFactory,
} from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';

/**
 * Mocked DaffUpsellProduct object.
 */
export class MockUpsellProduct extends MockProduct implements DaffUpsellProduct {
  upsell: DaffProduct[] = [];

  constructor(
    productFactory: DaffProductKindFactory,
  ) {
    super();

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
  ) {
    super(MockUpsellProduct, productKindFactory);
  }
}
