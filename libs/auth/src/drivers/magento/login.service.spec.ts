import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory
} from '../../../testing/src';

import { DaffMagentoLoginService } from './login.service';
import { DaffMagentoAuthGraphQlQueryManagerService } from './queries/auth-query-manager.service';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAuthQueryManager } from '../injection-tokens/auth-query-manager.token';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffAuthTransformer } from '../injection-tokens/auth-transformer.token';
import { DaffCustomerRegistration } from '../../models/customer-registration';
import { DaffLoginInfo } from '../../models/login-info';

describe('Driver | Magento | Auth | LoginService', () => {
  let controller: ApolloTestingController;
  let loginService: DaffMagentoLoginService;

  const transformerServiceSpy = jasmine.createSpyObj('DaffMagentoAuthTransformerService', ['transform'])

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

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
        DaffMagentoLoginService,
        {
          provide: DaffAuthQueryManager,
          useExisting: DaffMagentoAuthGraphQlQueryManagerService
        },
        {
          provide: DaffAuthTransformer,
          useValue: transformerServiceSpy
        }
      ]
    });

    loginService = TestBed.get(DaffMagentoLoginService);
    controller = TestBed.get(ApolloTestingController);
    authGraphQlQueryManagerService = TestBed.get(DaffMagentoAuthGraphQlQueryManagerService);

    mockRegistration = registrationFactory.create();
    mockAuth = authTokenFactory.create();

    token = mockAuth.token;
    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = {email, password};
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  describe('login | getting an access token', () => {
    let response;

    afterEach(() => {
      controller.verify();
    });

    beforeEach(() => {
      response = {
        generateCustomerToken: {
          token
        }
      };

      transformerServiceSpy.transform.withArgs(response).and.returnValue(mockAuth);
    });

    // TODO: determine if mocked tests are appropriate
    // it('should call the transformer', () => {
    //   loginService.login(mockLoginInfo).subscribe((auth) => {
    //     expect(auth).toEqual(mockAuth);
    //     // need to do the expectation in here because the transformer is invoked inside a callback
    //     expect(transformerServiceSpy.transform.calls.any()).toBeTruthy();
    //   });

    //   const op = controller.expectOne(authGraphQlQueryManagerService.generateATokenMutation(email, password).mutation);

    //   op.flush({
    //     data: response
    //   });
    // });

    it('should return the correct observable', done => {
      loginService.login(mockLoginInfo).subscribe((auth) => {
        expect(auth).toEqual(mockAuth);
        done();
      });

      const op = controller.expectOne(authGraphQlQueryManagerService.generateATokenMutation({email, password}).mutation);

      op.flush({
        data: response
      });
    });
  });
});
