import {
  Type,
  Injectable,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';


import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import { MockProduct } from '@daffodil/product/testing';

import {
  provideDaffProductExtraFactoryTypes,
  DAFF_PRODUCT_TYPE_FACTORIES,
} from './type.token';

class TestMockProduct extends MockProduct {}

@Injectable({
  providedIn: 'root',
})
class TestProductFactory extends DaffModelFactory<DaffProduct> {
  constructor() {
    super(TestMockProduct);
  }
}

describe('provideDaffProductExtraFactoryTypes', () => {
  let factories: Type<DaffModelFactory<DaffProduct>>[];
  let result: DaffModelFactory<DaffProduct>[];

  beforeEach(() => {
    factories = [
      TestProductFactory,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductExtraFactoryTypes(...factories),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_TYPE_FACTORIES);
  });

  it('should provide the factories to the token', () => {
    factories.forEach(factory => {
      expect(result).toContain(jasmine.any(factory));
    });
  });
});
