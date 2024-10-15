import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import {
  provideDaffProductExtraProductFactories,
  MockProduct,
  DaffProductKindFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

import { DaffProductExtensionFactory } from './extension.factory';

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

class TestMockProductKind extends MockProduct {
  type = DaffProductTypeEnum.Composite;
  extraField = 'not extraField';
}

@Injectable({
  providedIn: 'root',
})
class TestProductKindFactory extends DaffModelFactory<DaffProduct> {
  constructor(
    imageFactory: DaffProductImageFactory,
  ) {
    super(TestMockProductKind, imageFactory);
  }
}

describe('@daffodil/product/testing | DaffProductExtensionFactory', () => {
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
        ...provideDaffProductExtraProductFactories(
          TestProductFactory,
        ),
        {
          provide: DaffProductKindFactory,
          useExisting: TestProductKindFactory,
        },
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

    it('should include extra factories and prefer the extra factory fields, except for type', () => {
      expect((<TestMockProduct>result).extraField).toEqual('extraField');
    });

    it('should should not override the type of the product kind factory', () => {
      expect((<TestMockProduct>result).type).toEqual(DaffProductTypeEnum.Composite);
    });
  });
});
