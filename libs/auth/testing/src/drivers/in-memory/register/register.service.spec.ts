import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import {
  DaffAuthToken,
  DaffAccountRegistration,
  DaffLoginDriver,
  DaffCustomerRegistration
} from '@daffodil/auth';

import { DaffInMemoryRegisterService } from './register.service';
import { DaffAccountRegistrationFactory } from '../../../factories/account-registration.factory';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

describe('Driver | InMemory | Auth | RegisterService', () => {
  let registerService;
  let httpMock: HttpTestingController;

  const loginServiceSpy = jasmine.createSpyObj('DaffInMemoryLoginService', ['login'])

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
        DaffInMemoryRegisterService,
        {
          provide: DaffLoginDriver,
          useValue: loginServiceSpy
        }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    registerService = TestBed.get(DaffInMemoryRegisterService);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    token = mockAuth.token;
    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;

    loginServiceSpy.login.withArgs({email, password}).and.returnValue(of(mockAuth));
  });

  it('should be created', () => {
    expect(registerService).toBeTruthy();
  });

  describe('register | creating a new user', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request', () => {
      registerService.register(mockRegistration).subscribe(auth => {});

      const req = httpMock.expectOne(`${registerService.url}register`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockRegistration);

      req.flush(mockRegistration.customer);
    });

    it('should return an AuthToken', () => {
      registerService.register(mockRegistration).subscribe(auth => {
        expect(auth).toEqual(mockAuth);
      });

      const req = httpMock.expectOne(`${registerService.url}register`);

      req.flush(mockRegistration.customer);
    });
  });
});
