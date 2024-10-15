import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductImageFactory,
  MockProduct,
  provideDaffProductExtraFactoryTypes,
} from '@daffodil/product/testing';

import { DaffProductKindFactory } from './kind.factory';

class TestMockProduct extends MockProduct {
  extraField = 'extraField';
}

@Injectable({
  providedIn: 'root',
})
class TestProductFactory extends DaffModelFactory<DaffProduct> {
  constructor(
    imageFactory: DaffProductImageFactory,
  ) {
    super(TestMockProduct, imageFactory);
  }
}

describe('@daffodil/product/testing | DaffProductKindFactory', () => {

  let productFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffProductKindFactory,
        ...provideDaffProductExtraFactoryTypes(
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
