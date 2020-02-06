import { TestBed } from '@angular/core/testing';
import {
  DaffAccountRegistration,
  DaffAuthToken,
  DaffCustomerRegistration
} from '@daffodil/auth';

import { DaffInMemoryBackendAuthService } from './auth.service';
import { DaffAccountRegistrationFactory } from '../factories/account-registration.factory';
import { DaffAuthTokenFactory } from '../factories/auth-token.factory';

describe('DaffAuthInMemoryBackend', () => {
  let authTestingService;

  const registrationFactory = new DaffAccountRegistrationFactory();
  const authTokenFactory = new DaffAuthTokenFactory()

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendAuthService]
    });

    authTestingService = TestBed.get(DaffInMemoryBackendAuthService);
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

  describe('post', () => {
    it('should call #login when the id is login', () => {
      const reqInfoStub = {
        id: 'login'
      };
      const loginSpy = spyOn(authTestingService, 'login');

      authTestingService.post(reqInfoStub);

      expect(loginSpy.calls.mostRecent().args).toEqual([reqInfoStub]);
    });

    it('should call #register when the id is register', () => {
      const reqInfoStub = {
        id: 'register'
      };
      const registerSpy = spyOn(authTestingService, 'register');

      authTestingService.post(reqInfoStub);

      expect(registerSpy.calls.mostRecent().args).toEqual([reqInfoStub]);
    });
  })

  describe('login', () => {
    let reqInfoStub;

    beforeEach(() => {
      reqInfoStub = {
        utils: {
          createResponse$: f => f()
        }
      };
    })

    it('should generate a token if the user exists and password is correct', () => {
      const mockAuth: DaffAuthToken = authTokenFactory.create();
      const token = mockAuth.token;
      const generateTokenSpy = spyOn(authTestingService, 'generateToken');
      generateTokenSpy.and.returnValue(token)

      expect(authTestingService.login(reqInfoStub).body).toEqual(mockAuth);
      expect(generateTokenSpy.calls.any()).toBeTruthy();
    })
  });

  describe('register', () => {
    let reqInfoStub;
    let registration: DaffAccountRegistration<DaffCustomerRegistration>;

    beforeEach(() => {
      reqInfoStub = {
        utils: {
          createResponse$: f => f()
        }
      };

      registration = registrationFactory.create();
    })

    it('should return the customer', () => {
      reqInfoStub.utils.getJsonBody = () => registration;

      expect(authTestingService.register(reqInfoStub).body).toEqual(registration.customer);
    })
  });
});
