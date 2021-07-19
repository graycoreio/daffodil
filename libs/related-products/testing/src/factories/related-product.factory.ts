import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MockProduct } from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';

/**
 * Mocked DaffRelatedProduct object.
 */
export class MockRelatedProduct extends MockProduct implements DaffRelatedProduct {
  related = [];
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
