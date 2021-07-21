import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MockProduct,
  DaffProductFactory,
} from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';

/**
 * Mocked DaffRelatedProduct object.
 */
export class MockRelatedProduct extends MockProduct implements DaffRelatedProduct {
  related = this.createProducts();

  private createProducts() {
    return (new DaffProductFactory()).createMany(3);
  }
}

/**
 * Factory for creating DaffRelatedProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffRelatedProductFactory extends DaffModelFactory<DaffRelatedProduct>{
  constructor(){
    super(MockRelatedProduct);
  }
}
