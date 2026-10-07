import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  MockProduct,
  DaffProductKindFactory,
  DaffProductImageFactory,
  DaffProductCustomAttributeValueFactory,
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
    customAttributeFactory: DaffProductCustomAttributeValueFactory,
  ) {
    super(imageFactory, customAttributeFactory);

    this.upsell = productFactory.createMany(3);
  }
}

/**
 * Factory for creating DaffUpsellProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffUpsellProductFactory extends DaffModelFactory<DaffUpsellProduct, typeof MockUpsellProduct>{
  constructor(
    productKindFactory: DaffProductKindFactory,
    imageFactory: DaffProductImageFactory,
    customAttributeFactory: DaffProductCustomAttributeValueFactory,
  ) {
    super(MockUpsellProduct, productKindFactory, imageFactory, customAttributeFactory);
  }
}
