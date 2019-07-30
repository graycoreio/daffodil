import { TestBed } from '@angular/core/testing';

import { DaffMagentoProductTransformerService } from './product-transformer.service';

describe('DaffMagentoProductTransformerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaffMagentoProductTransformerService = TestBed.get(DaffMagentoProductTransformerService);
    expect(service).toBeTruthy();
  });
});
