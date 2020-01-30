import { TestBed } from '@angular/core/testing';

import { DaffMagentoAuthTransformerService } from './auth-transformer.service';

describe('DaffMagentoAuthTransformerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaffMagentoAuthTransformerService = TestBed.get(DaffMagentoAuthTransformerService);
    expect(service).toBeTruthy();
  });

  // TODO: implement a real test
});
