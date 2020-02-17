import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  DaffAccountRegistration,
  DaffCustomerRegistration,
  DaffLoginInfo,
  DaffAuthToken
} from '@daffodil/auth';

import { DaffInMemoryBackendAuthService } from './auth.service';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';
import { DaffAuthTokenFactory } from '../factories/auth-token.factory';

describe('DaffAuthInMemoryBackend | Integration', () => {
  let httpClient;

  const registrationFactory = new DaffAccountRegistrationFactory();
  const authFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;
  let mockRegistration: DaffAccountRegistration;
  let mockLoginInfo: DaffLoginInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendAuthService)
      ],
    });

    httpClient = TestBed.get(HttpClient);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();
    mockLoginInfo = {
      email: mockRegistration.customer.email,
      password: mockRegistration.password
    };
  });

  describe('processing a login request', () => {
    it('should process post requests of the form `/api/auth/login` and return a token', done => {
      httpClient.post('/api/auth/login', {}).subscribe(result => {
        expect(result.token).toBeDefined();
        done();
      });
    });
  });

  describe('processing a register request', () => {
    it('should process post requests of the form `/api/auth/register` and return the login info', done => {
      httpClient.post('/api/auth/register', mockRegistration).subscribe(result => {
        expect(result).toEqual(mockLoginInfo);
        done();
      });
    });
  });

  describe('processing a check request', () => {
    it('should process post requests of the form `/api/auth/check` and return true', done => {
      httpClient.post('/api/auth/check', mockAuth).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining({valid: true}));
        done();
      });
    });
  });

  describe('processing a logout request', () => {
    it('should process post requests of the form `/api/auth/logout` and return success', done => {
      httpClient.post('/api/auth/logout', {}).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining({success: true}));
        done();
      });
    });
  });
});
