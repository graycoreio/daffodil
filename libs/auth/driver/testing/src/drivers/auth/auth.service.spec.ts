import { TestBed } from '@angular/core/testing';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffAuthServiceInterface } from '@daffodil/auth/driver';
import { DaffAuthTokenFactory } from '@daffodil/auth/testing';

import { DaffTestingAuthService } from './auth.service';

describe('@daffodil/auth/driver/testing | AuthService', () => {
  let service: DaffAuthServiceInterface;

  const authFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingAuthService,
      ],
    });

    service = TestBed.inject(DaffTestingAuthService);

    mockAuth = authFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('check | checking a token', () => {
    it('should not throw an error', done => {
      service.check().subscribe(res => {
        expect(res).toBeUndefined();
        done();
      });
    });
  });
});
