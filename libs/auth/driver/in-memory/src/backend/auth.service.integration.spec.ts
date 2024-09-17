import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientInMemoryWebApiModule,
  STATUS,
} from 'angular-in-memory-web-api';
import {
  catchError,
  of,
} from 'rxjs';

import {
  DaffAccountRegistration,
  DaffLoginInfo,
} from '@daffodil/auth';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';

import { DaffInMemoryBackendAuthService } from './auth.service';

describe('DaffAuthInMemoryBackend | Integration', () => {
  let httpClient;

  const registrationFactory = new DaffAccountRegistrationFactory();

  let mockRegistration: DaffAccountRegistration;
  let mockLoginInfo: DaffLoginInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendAuthService, { delay: 0 })),
      ],
    });

    httpClient = TestBed.inject(HttpClient);

    mockRegistration = registrationFactory.create();
    mockLoginInfo = {
      email: mockRegistration.email,
      password: mockRegistration.password,
    };
  });

  describe('processing a login request', () => {
    describe('when the customer is registered', () => {
      beforeEach(done => {
        httpClient.post('/api/auth/register', mockRegistration).subscribe(result => {
          done();
        });
      });

      describe('and when the password is correct', () => {
        it('should process post requests of the form `/api/auth/login` and return a token', done => {
          httpClient.post('/api/auth/login', mockLoginInfo).subscribe(result => {
            expect(result.token).toBeDefined();
            done();
          });
        });
      });

      describe('and when the password is incorrect', () => {
        beforeEach(() => {
          mockLoginInfo.password = `not ${mockRegistration.password}`;
        });

        it('should error as unauthorized', done => {
          httpClient.post('/api/auth/login', mockLoginInfo).pipe(
            catchError(err => {
              expect(err.status).toEqual(STATUS.UNAUTHORIZED);
              done();
              return of();
            }),
          ).subscribe(result => {
            fail('Should not return');
          });
        });
      });
    });

    describe('when the customer is not registered', () => {
      it('should return unauthorized', done => {
        httpClient.post('/api/auth/login', mockLoginInfo).pipe(
          catchError(err => {
            expect(err.status).toEqual(STATUS.UNAUTHORIZED);
            done();
            return of();
          }),
        ).subscribe(result => {
          fail('Should not return');
        });
      });
    });
  });

  describe('processing a register request', () => {
    it('should process post requests of the form `/api/auth/register` and return', done => {
      httpClient.post('/api/auth/register', mockRegistration).subscribe(result => {
        done();
      });
    });
  });

  describe('processing a check request', () => {
    it('should process post requests of the form `/api/auth/check` and return nothing', done => {
      httpClient.post('/api/auth/check').subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining({}));
        done();
      });
    });
  });

  describe('processing a logout request', () => {
    it('should process post requests of the form `/api/auth/logout` and return success', done => {
      httpClient.post('/api/auth/logout', {}).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining({ success: true }));
        done();
      });
    });
  });
});
