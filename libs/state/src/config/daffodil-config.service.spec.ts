import { TestBed, inject } from '@angular/core/testing';

import { DaffodilConfig } from '@daffodil/core';

import { DaffodilConfigService } from './daffodil-config.service';

class MockDaffodilConfig implements DaffodilConfig {
  BASE_URL: string = 'mockBaseUrl';
}

describe('DaffodilConfigService', () => {

  let daffodilConfigService: DaffodilConfigService;
  let daffodilConfig: DaffodilConfig;

  beforeEach(() => {
    daffodilConfig = new MockDaffodilConfig();
    daffodilConfigService = new DaffodilConfigService(daffodilConfig);

    TestBed.configureTestingModule({
      providers: [{provide: DaffodilConfigService, useValue: daffodilConfigService}]
    });
  });

  it('should be created', inject([DaffodilConfigService], (service: DaffodilConfigService) => {
    expect(service).toBeTruthy();
  }));
});
