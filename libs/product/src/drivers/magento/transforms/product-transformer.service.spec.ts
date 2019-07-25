import { TestBed } from '@angular/core/testing';

import { ProductTransformerService } from './product-transformer.service';

describe('ProductTransformerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductTransformerService = TestBed.get(ProductTransformerService);
    expect(service).toBeTruthy();
  });
});
