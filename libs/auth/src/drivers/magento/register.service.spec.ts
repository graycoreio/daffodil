import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { of } from 'rxjs';

import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory
} from '../../../testing/src';
import { DaffMagentoRegisterService } from './register.service';
import { DaffMagentoAuthGraphQlQueryManagerService } from './queries/auth-query-manager.service';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAuthQueryManager } from '../injection-tokens/auth-query-manager.token';
import { DaffLoginDriver } from '../injection-tokens/login-driver.token';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffCustomerRegistration } from '../../models/customer-registration';

describe('Driver | Magento | Auth | RegisterService', () => {
  let controller: ApolloTestingController;
  let registerService: DaffMagentoRegisterService;

  const loginServiceSpy = jasmine.createSpyObj('DaffMagentoLoginService', ['login'])

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;
  let mockLoginInfo: DaffLoginInfo;
  let token: string;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;
  let mockRegistration: DaffAccountRegistration<DaffCustomerRegistration>;

  let authGraphQlQueryManagerService: DaffMagentoAuthGraphQlQueryManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoRegisterService,
        {
          provide: DaffAuthQueryManager,
          useExisting: DaffMagentoAuthGraphQlQueryManagerService
        },
        {
          provide: DaffLoginDriver,
          useValue: loginServiceSpy
        }
      ]
    });

    registerService = TestBed.get(DaffMagentoRegisterService);
    controller = TestBed.get(ApolloTestingController);
    authGraphQlQueryManagerService = TestBed.get(DaffMagentoAuthGraphQlQueryManagerService);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    token = mockAuth.token;
    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = {email, password};

    loginServiceSpy.login.withArgs(mockLoginInfo).and.returnValue(of(mockAuth));
  });

  it('should be created', () => {
    expect(registerService).toBeTruthy();
  });

  describe('register | getting an access token', () => {
    let response;

    afterEach(() => {
      controller.verify();
    });

    beforeEach(() => {
      response = {
        createCustomer: {
          customer: mockRegistration.customer
        }
      };
    });

    it('should return the correct observable', done => {
      registerService.register(mockRegistration).subscribe((auth) => {
        expect(auth).toEqual(mockAuth);
        done();
      });

      const op = controller.expectOne(authGraphQlQueryManagerService.createACustomerMutation(mockRegistration).mutation);

      op.flush({
        data: response
      });
    });
  });
});
