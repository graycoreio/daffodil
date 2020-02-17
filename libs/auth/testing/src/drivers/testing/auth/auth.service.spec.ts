import { TestBed } from '@angular/core/testing';
import { catchError } from 'rxjs/operators';

import {
  DaffAuthToken,
  DaffAuthServiceInterface,
} from '@daffodil/auth';

import { DaffTestingAuthService } from './auth.service';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

describe('Driver | Testing | Auth | AuthService', () => {
  let service: DaffAuthServiceInterface;

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
    it('should not throw an error', () => {
      service.check().pipe(
        catchError((err, caught) => {
          fail('Check threw an error');
          return caught
        })
      ).subscribe(res => {
        expect(res).toBeUndefined();
      });
    });
  });
});
