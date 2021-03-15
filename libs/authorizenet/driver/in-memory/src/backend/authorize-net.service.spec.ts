import { TestBed } from '@angular/core/testing';

import { DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID } from '@daffodil/authorizenet/driver/in-memory';

import { DaffInMemoryBackendAuthorizenetService } from './authorize-net.service';

describe('Driver | InMemory | Authorizenet | DaffInMemoryBackendAuthorizenetService', () => {
  let authorizenetBackend: DaffInMemoryBackendAuthorizenetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendAuthorizenetService,
      ],
    });

    authorizenetBackend = TestBed.inject(DaffInMemoryBackendAuthorizenetService);
  });

  it('should be created', () => {
    expect(authorizenetBackend).toBeTruthy();
  });

  describe('get', () => {
    let reqInfoStub;
    let result;

    beforeEach(() => {
      reqInfoStub = {
        utils: {
          createResponse$: (func) => func(),
        },
      };

      result = authorizenetBackend.get(reqInfoStub);
    });

    it('should return a code for the in-memory payment type', () => {
      expect(result.body.code).toEqual(DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID);
    });
  });
});
