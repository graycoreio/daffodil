import { TestBed } from '@angular/core/testing';

import { DaffProductTestingModule } from '@daffodil/product/testing';
import { DaffSearchProductResult } from '@daffodil/search-product';

import { DaffSearchProductResultFactory } from './product-search-result.factory';

describe('@daffodil/search-product/testing | DaffSearchProductResultFactory', () => {
  let productFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffSearchProductResultFactory,
      ],
    });

    productFactory = TestBed.inject(DaffSearchProductResultFactory);
  });

  it('should be created', () => {
    expect(productFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffSearchProductResult;

    beforeEach(() => {
      result = productFactory.create();
    });

    it('should return a DaffSearchProductResult with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.kind).toBeDefined();
      expect(result.description).toBeDefined();
    });
  });
});
