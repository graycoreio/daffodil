import { TestBed, inject } from '@angular/core/testing';
import { DaffDriverConfig } from './models/driver-config';
import { DaffDriverConfigService } from './driver-config.service';

class DaffDriverConfigMock implements DaffDriverConfig {
  BASE_URL = 'mockBaseUrl';
}

describe('Driver | Config | DaffodilConfigService', () => {
  let daffodilConfigService: DaffDriverConfigService;
  let daffodilDriverConfig: DaffDriverConfig;

  beforeEach(() => {
    daffodilDriverConfig = new DaffDriverConfigMock();
    daffodilConfigService = new DaffDriverConfigService(daffodilDriverConfig);

    TestBed.configureTestingModule({
      providers: [
        { provide: DaffDriverConfigService, useValue: daffodilConfigService }
      ]
    });
  });

  it('should be created',
    inject([DaffDriverConfigService], (service: DaffDriverConfigService) => {
      expect(service).toBeTruthy();
    })
  );
});
