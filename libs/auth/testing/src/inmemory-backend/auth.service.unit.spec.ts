import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import { DaffAuthToken } from '@daffodil/auth';

import { DaffInMemoryBackendAuthService } from './auth.service';
import { DaffAccountRegistrationFactory } from '../factories/account-registration.factory';
import { DaffAuthTokenFactory } from '../factories/auth-token.factory';

describe('DaffAuthInMemoryBackend | Unit', () => {
  let authTestingService;
  let reqInfoStub;

  const registrationFactory = new DaffAccountRegistrationFactory();
  const authFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendAuthService,
      ]
    });

    authTestingService = TestBed.get(DaffInMemoryBackendAuthService);

    mockAuth = authFactory.create();

    reqInfoStub = {
      req: {},
      utils: {
        createResponse$: f => f(),
        getJsonBody: req => req.body
      }
    };
  });

  it('should be created', () => {
    expect(authTestingService).toBeTruthy();
  });

  describe('after intializiaton', () => {
    let result;

    beforeEach(() => {
      result = authTestingService.createDb();
    });

    it('should have any empty database', () => {
      expect(result.auth).toEqual({});
    });
  });

  describe('processing a login request', () => {
    it('should process post requests of the form `/api/auth/login` and return a token with an OK status', () => {
      reqInfoStub.id = 'login';
      const result = authTestingService.post(reqInfoStub);

      expect(result.body.token).toBeDefined();
      expect(result.status).toEqual(STATUS.OK);
    });
  });

  describe('processing a register request', () => {
    it('should process post requests of the form `/api/auth/register` and return the login info with a CREATED status', () => {
      const mockRegistration = registrationFactory.create();
      const mockLoginInfo = {
        email: mockRegistration.customer.email,
        password: mockRegistration.password
      };
      reqInfoStub.id = 'register';
      reqInfoStub.req.body = mockRegistration;
      const result = authTestingService.post(reqInfoStub);

      expect(result.body).toEqual(mockLoginInfo);
      expect(result.status).toEqual(STATUS.CREATED);
    });
  });

  describe('processing a logout request', () => {
    it('should process post requests of the form `/api/auth/logout` and return success with an OK status', () => {
      reqInfoStub.id = 'logout';
      reqInfoStub.req.body = {};
      const result = authTestingService.post(reqInfoStub);

      expect(result.body).toEqual(jasmine.objectContaining({success: true}));
      expect(result.status).toEqual(STATUS.OK);
    });
  });

  describe('processing a check request', () => {
    it('should process post requests of the form `/api/auth/check` and return true with a OK status', () => {
      reqInfoStub.id = 'check';
      reqInfoStub.req.body = mockAuth;
      const result = authTestingService.post(reqInfoStub);

      expect(result.body).toEqual(jasmine.objectContaining({valid: true}));
      expect(result.status).toEqual(STATUS.OK);
    });
  });
});
