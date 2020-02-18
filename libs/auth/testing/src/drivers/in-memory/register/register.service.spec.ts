import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import {
  DaffAuthToken,
  DaffAccountRegistration,
  DaffLoginDriver,
  DaffLoginInfo
} from '@daffodil/auth';

import { DaffInMemoryRegisterService } from './register.service';
import { DaffAccountRegistrationFactory } from '../../../factories/account-registration.factory';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

describe('Driver | InMemory | Auth | RegisterService', () => {
  let registerService;
  let httpMock: HttpTestingController;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();

  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;
  let mockRegistration: DaffAccountRegistration;
  let mockLoginInfo: DaffLoginInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryRegisterService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    registerService = TestBed.get(DaffInMemoryRegisterService);

    mockRegistration = registrationFactory.create();

    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;

    mockLoginInfo = {
      email,
      password
    };
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

    it('should return a DaffLoginInfo', () => {
      registerService.register(mockRegistration).subscribe(loginInfo => {
        expect(loginInfo).toEqual(mockLoginInfo);
      });

      const req = httpMock.expectOne(`${registerService.url}register`);

      req.flush(mockRegistration.customer);
    });
  });
});
