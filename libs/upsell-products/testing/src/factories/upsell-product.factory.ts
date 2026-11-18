import { Injectable } from '@angular/core';

import { DaffModelFactory, IDaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct, DaffProductImage } from '@daffodil/product';
import {
  MockProduct,
  DaffProductKindFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

import { DaffUpsellProduct } from '../../models/upsell-product';

/**
 * Mocked {@link DaffUpsellProduct} object for testing.
 */
export class MockUpsellProduct extends MockProduct implements DaffUpsellProduct {
  upsell: DaffProduct[] = [];

  constructor(
    productFactory: IDaffModelFactory<DaffProduct>,
    imageFactory: IDaffModelFactory<DaffProductImage>,
  ) {
    super(imageFactory);

    this.upsell = productFactory.createMany(this.upsellCount);
  }
}

/**
 * Factory for creating {@link DaffUpsellProduct}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffUpsellProductFactory extends DaffModelFactory<DaffUpsellProduct>{
  constructor(
    productKindFactory: IDaffModelFactory<DaffProduct>,
    imageFactory: IDaffModelFactory<DaffProductImage>,
  ) {
    super(MockUpsellProduct, productKindFactory, imageFactory);
  }
}
