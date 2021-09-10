import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  daffProvideProductExtraProductFactories,
  MockProduct,
  DaffProductKindFactory,
} from '@daffodil/product/testing';

import { DaffProductExtensionFactory } from './extension.factory';

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

describe('Product | Testing | Factories | DaffProductExtensionFactory', () => {
  let productKindFactorySpy: jasmine.SpyObj<DaffProductKindFactory>;
  let productFactory;

  beforeEach(() => {
    productKindFactorySpy = jasmine.createSpyObj('DaffProductKindFactory', ['create']);

    TestBed.configureTestingModule({
      providers: [
        DaffProductExtensionFactory,
        {
          provide: DaffProductKindFactory,
          useValue: productKindFactorySpy,
        },
        ...daffProvideProductExtraProductFactories(
          TestProductFactory,
        ),
      ],
    });

    productFactory = TestBed.inject(DaffProductExtensionFactory);
  });

  it('should be created', () => {
    expect(productFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProduct;

    beforeEach(() => {
      result = productFactory.create();
    });

    it('should include extra factories', () => {
      expect((<TestMockProduct>result).extraField).toBeDefined();
    });
  });
});
