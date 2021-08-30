import {
  Type,
  Injectable,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';


import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import { MockProduct } from '@daffodil/product/testing';

import {
  daffProvideProductExtraProductFactories,
  DAFF_PRODUCT_EXTRA_FACTORIES,
} from './extra.token';

class TestMockProduct extends MockProduct {}

@Injectable({
  providedIn: 'root',
})
class TestProductFactory extends DaffModelFactory<DaffProduct> {
  constructor() {
    super(TestMockProduct);
  }
}

describe('daffProvideProductExtraProductFactories', () => {
  let factories: Type<DaffModelFactory<DaffProduct>>[];
  let result: DaffModelFactory<DaffProduct>[];

  beforeEach(() => {
    factories = [
      TestProductFactory,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideProductExtraProductFactories(...factories),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_EXTRA_FACTORIES);
  });

  it('should provide the factories to the token', () => {
    factories.forEach(factory => {
      expect(result).toContain(jasmine.any(factory));
    });
  });
});
