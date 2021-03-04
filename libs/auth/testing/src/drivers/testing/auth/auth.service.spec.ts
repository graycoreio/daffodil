import { TestBed } from '@angular/core/testing';

import {
  DaffAuthToken,
  DaffAuthServiceInterface,
} from '@daffodil/auth';

import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';
import { DaffTestingAuthService } from './auth.service';

describe('Driver | Testing | Auth | AuthService', () => {
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
