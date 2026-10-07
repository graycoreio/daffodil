import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductCustomAttributeValueFactory,
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
class TestProductFactory extends DaffModelFactory<DaffProduct, typeof TestMockProduct> {
  constructor(
    imageFactory: DaffProductImageFactory,
    customAttributeFactory: DaffProductCustomAttributeValueFactory,
  ) {
    super(TestMockProduct, imageFactory, customAttributeFactory);
  }
}

describe('@daffodil/product/testing | DaffProductKindFactory', () => {
  let productFactory: DaffProductKindFactory;

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
