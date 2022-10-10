import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendPaypalService } from './paypal.service';

describe('Testing | Driver | InMemoryBackend | DaffInMemoryBackendPaypalService', () => {
  let paypalTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendPaypalService],
    });

    paypalTestingService = TestBed.inject(DaffInMemoryBackendPaypalService);
  });

  it('should be created', () => {
    expect(paypalTestingService).toBeTruthy();
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = paypalTestingService.createDb();
    });

    it('should return an object with a DaffPaypalExpressTokenResponse', () => {
      expect(result.paypalTokenResponse.token).toBeTruthy();
      expect(result.paypalTokenResponse.urls).toBeTruthy();
    });
  });
});
