import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  MockProduct,
  daffProvideProductExtraFactoryTypes,
} from '@daffodil/product/testing';

import { DaffProductKindFactory } from './kind.factory';

class TestMockProduct extends MockProduct {
  extraField = 'extraField';
}

@Injectable({
  providedIn: 'root',
})
class TestProductFactory extends DaffModelFactory<DaffProduct> {
  constructor() {
    super(TestMockProduct);
  }
}

describe('Product | Testing | Factories | DaffProductKindFactory', () => {

  let productFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffProductKindFactory,
        ...daffProvideProductExtraFactoryTypes(
          TestProductFactory,
        ),
      ],
    });

    productFactory = TestBed.inject(DaffProductKindFactory);
  });

  it('should be created', () => {
    expect(productFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProduct;

    beforeEach(() => {
      result = productFactory.create();
    });

    it('should include extra factory types', () => {
      expect((<TestMockProduct>result).extraField).toBeDefined();
    });
  });
});
