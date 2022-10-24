import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import {
  DaffAccountRegistration,
  DaffAuthToken,
  DaffLoginInfo,
} from '@daffodil/auth';
import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory,
} from '@daffodil/auth/testing';

import { DaffInMemoryBackendAuthService } from './auth.service';

describe('@daffodil/auth/driver/in-memory | DaffInMemoryBackendAuthService | Unit', () => {
  let service: DaffInMemoryBackendAuthService;
  let registrationFactory: DaffAccountRegistrationFactory;
  let authFactory: DaffAuthTokenFactory;

  let reqInfoStub;
  let mockRegistration: DaffAccountRegistration;
  let mockLoginInfo: DaffLoginInfo;
  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendAuthService,
      ],
    });

    service = TestBed.inject(DaffInMemoryBackendAuthService);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);
    authFactory = TestBed.inject(DaffAuthTokenFactory);

    mockAuth = authFactory.create();
    mockRegistration = registrationFactory.create();
    mockLoginInfo = {
      email: mockRegistration.email,
      password: mockRegistration.password,
    };

    reqInfoStub = {
      req: {},
      utils: {
        createResponse$: f => f(),
        getJsonBody: req => req.body,
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('after intializiaton', () => {
    let result;

    beforeEach(() => {
      result = service.createDb();
    });

    it('should have any empty database', () => {
      expect(result.auth).toEqual({});
    });
  });

  describe('processing a login request', () => {
    describe('when the user is registered', () => {
      beforeEach(() => {
        service.customers[mockRegistration.email] = {
          email: mockRegistration.email,
          password: mockRegistration.password,
        };
      });

      it('should process post requests of the form `/api/auth/login` and return a token with an OK status', () => {
        reqInfoStub.id = 'login';
        reqInfoStub.req.body = mockLoginInfo;
        const result = service.post(reqInfoStub);

        expect(result.body.token).toBeDefined();
        expect(result.status).toEqual(STATUS.OK);
      });
    });
  });

  describe('processing a register request', () => {
    it('should process post requests of the form `/api/auth/register` and return with a CREATED status', () => {
      reqInfoStub.id = 'register';
      reqInfoStub.req.body = mockRegistration;
      const result = service.post(reqInfoStub);

      expect(result.status).toEqual(STATUS.CREATED);
    });
  });

  describe('processing a logout request', () => {
    it('should process post requests of the form `/api/auth/logout` and return success with an OK status', () => {
      reqInfoStub.id = 'logout';
      reqInfoStub.req.body = {};
      const result = service.post(reqInfoStub);

      expect(result.body).toEqual(jasmine.objectContaining({ success: true }));
      expect(result.status).toEqual(STATUS.OK);
    });
  });

  describe('processing a check request', () => {
    it('should process post requests of the form `/api/auth/check` and return nothing with a OK status', () => {
      reqInfoStub.id = 'check';
      const result = service.post(reqInfoStub);

      expect(result.body).toEqual(jasmine.objectContaining({}));
      expect(result.status).toEqual(STATUS.OK);
    });
  });
});
