import { TestBed } from '@angular/core/testing';

import { DaffInMemoryProductTestingService } from './product.testing.service';

import { DaffCoreTestingModule, ProductFactory } from '@daffodil/core/testing';

describe('Driver | InMemory | Product | DaffInMemoryProductTestingService', () => {
  let productTestingService;
  let productFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DaffCoreTestingModule],
      providers: [DaffInMemoryProductTestingService]
    });

    productFactory = TestBed.get(ProductFactory);
    productTestingService = TestBed.get(DaffInMemoryProductTestingService);
  });

  it('should be created', () => {
    expect(productTestingService).toBeTruthy();
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = productTestingService.createDb();
    });

    it('should return a object with an array of Products', () => {
      expect(Array.isArray(result.products)).toEqual(true);
      expect(result.products.length).toBeGreaterThan(2);
    });
  });
});
