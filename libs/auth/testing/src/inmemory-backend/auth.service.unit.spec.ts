import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import { DaffInMemoryBackendAuthService } from './auth.service';
import { DaffAccountRegistrationFactory } from '../factories/account-registration.factory';

describe('DaffAuthInMemoryBackend | Unit', () => {
  let authTestingService;
  let reqInfoStub;

  const registrationFactory = new DaffAccountRegistrationFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendAuthService,
      ]
    });

    authTestingService = TestBed.get(DaffInMemoryBackendAuthService);

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
    it('should process post requests of the form `/api/auth/register` and return the customer info with a CREATED status', () => {
      reqInfoStub.id = 'register';
      reqInfoStub.req.body = registrationFactory.create();
      const result = authTestingService.post(reqInfoStub);

      expect(result.body.id).toBeDefined();
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
});
