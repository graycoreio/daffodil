import { TestBed } from '@angular/core/testing';

import {
  DaffAuthToken,
  DaffAuthServiceInterface,
} from '@daffodil/auth';

import { DaffTestingAuthService } from './auth.service';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

describe('Driver | Testing | Auth | AuthService', () => {
  let service: DaffAuthServiceInterface<DaffAuthToken>;

  const authFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingAuthService
      ]
    });

    service = TestBed.get(DaffTestingAuthService);

    mockAuth = authFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('check | checking a token', () => {
    it('should return true', () => {
      service.check(mockAuth).subscribe(res => {
        expect(res).toEqual(true);
      });
    });
  });
});
