import { TestBed, inject } from '@angular/core/testing';

import { DaffodilConfigService } from './daffodil-config.service';
import { DaffodilConfig } from '../config/model';

class DaffodilConfigMock implements DaffodilConfig {

  BASE_URL: string = 'mockBaseUrl';
}

describe('DaffodilConfigService', () => {

  let daffodilConfigService: DaffodilConfigService;
  let daffodilConfig: DaffodilConfig;

  beforeEach(() => {
    daffodilConfig = new DaffodilConfigMock();
    daffodilConfigService = new DaffodilConfigService(daffodilConfig);

    TestBed.configureTestingModule({
      providers: [{provide: DaffodilConfigService, useValue: daffodilConfigService}]
    });
  });

  it('should be created', inject([DaffodilConfigService], (service: DaffodilConfigService) => {
    expect(service).toBeTruthy();
  }));
});
