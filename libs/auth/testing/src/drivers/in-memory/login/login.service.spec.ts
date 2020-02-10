import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import {
  DaffAuthToken,
  DaffAccountRegistration,
  DaffCustomerRegistration
} from '@daffodil/auth';

import { DaffInMemoryLoginService } from './login.service';
import { DaffAccountRegistrationFactory } from '../../../factories/account-registration.factory';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

describe('Driver | InMemory | Auth | LoginService', () => {
  let loginService;
  let httpMock: HttpTestingController;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let token: string;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;
  let mockRegistration: DaffAccountRegistration<DaffCustomerRegistration>;
  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryLoginService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    loginService = TestBed.get(DaffInMemoryLoginService);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    token = mockAuth.token;
    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  describe('login | getting a token', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request and return an AuthToken', () => {
      loginService.login({email, password}).subscribe(auth => {
        expect(auth).toEqual(mockAuth);
      });

      const req = httpMock.expectOne(`${loginService.url}login`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({email, password});

      req.flush(mockAuth);
    });
  });
});
