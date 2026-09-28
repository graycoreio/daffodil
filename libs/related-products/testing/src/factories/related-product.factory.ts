import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  MockProduct,
  DaffProductKindFactory,
  DaffProductImageFactory,
  DaffProductCustomAttributeValueFactory,
} from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';

/**
 * Mocked DaffRelatedProduct object.
 */
export class MockRelatedProduct extends MockProduct implements DaffRelatedProduct {
  related: DaffProduct[] = [];

  constructor(
    productFactory: DaffProductKindFactory,
    imageFactory: DaffProductImageFactory,
    customAttributeFactory: DaffProductCustomAttributeValueFactory,
  ) {
    super(imageFactory, customAttributeFactory);

    this.related = productFactory.createMany(3);
  }
}

/**
 * Factory for creating DaffRelatedProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffRelatedProductFactory extends DaffModelFactory<DaffRelatedProduct, typeof MockRelatedProduct>{
  constructor(
    productKindFactory: DaffProductKindFactory,
    imageFactory: DaffProductImageFactory,
    customAttributeFactory: DaffProductCustomAttributeValueFactory,
  ) {
    super(MockRelatedProduct, productKindFactory, imageFactory, customAttributeFactory);
  }
}
