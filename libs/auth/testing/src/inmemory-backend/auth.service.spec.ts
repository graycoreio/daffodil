import { TestBed } from '@angular/core/testing';
import { DaffInMemoryBackendAuthService } from './auth.service';
import { DaffAccountRegistration, DaffAuth } from '@daffodil/auth';
import { DaffAccountRegistrationFactory } from '../factories/account-registration.factory';

describe('DaffAuthInMemoryBackend', () => {
  let authTestingService;

  const registrationFactory = new DaffAccountRegistrationFactory();

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
    let email: string;
    let password: string;

    beforeEach(() => {
      reqInfoStub = {
        utils: {
          createResponse$: f => f()
        }
      };

      email = 'email';
      password = 'password'

      authTestingService['setUserInfo'](email, password);
    })

    it('should return an error if the user is not registered', () => {
      reqInfoStub.utils.getJsonBody = () => ({
        email: '',
        password: ''
      });

      expect(authTestingService.login(reqInfoStub)).toEqual(Error('User does not exist'));
    })

    it('should return an error if the password is incorrect', () => {
      reqInfoStub.utils.getJsonBody = () => ({
        email,
        password: ''
      });

      expect(authTestingService.login(reqInfoStub)).toEqual(Error('Incorrect password'));
    })

    it('should generate a token if the user exists and password is correct', () => {
      const token = 's78adf78sdaf';
      const mockAuth: DaffAuth = {
        token
      }
      const generateTokenSpy = spyOn(authTestingService, 'generateToken');
      generateTokenSpy.and.returnValue(token)
      reqInfoStub.utils.getJsonBody = () => ({
        email,
        password
      });

      expect(authTestingService.login(reqInfoStub).body).toEqual(mockAuth);
      expect(generateTokenSpy.calls.any()).toBeTruthy();
    })
  });

  describe('register', () => {
    let reqInfoStub;
    let email: string;
    let password: string;
    let registration: DaffAccountRegistration;

    beforeEach(() => {
      reqInfoStub = {
        utils: {
          createResponse$: f => f()
        }
      };

      registration = registrationFactory.create();
      email = registration.customer.email;
      password = registration.password;
    })

    it('should return an error if the user is already registered', () => {
      authTestingService['setUserInfo'](email, password);
      reqInfoStub.utils.getJsonBody = () => registration;

      expect(authTestingService.register(reqInfoStub)).toEqual(Error('User already exists'));
    })

    it('should return the customer if the user does not already exist', () => {
      reqInfoStub.utils.getJsonBody = () => registration;

      expect(authTestingService.register(reqInfoStub).body).toEqual(registration.customer);
    })
  });
});
