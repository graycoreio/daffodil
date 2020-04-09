import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import {
  DaffAccountRegistrationFactory,
} from '@daffodil/auth/testing';

import { DaffMagentoRegisterService } from './register.service';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffLoginInfo } from '../../models/login-info';
import { createCustomerMutation } from './queries/public_api';

describe('Driver | Magento | Auth | RegisterService', () => {
  let controller: ApolloTestingController;
  let registerService: DaffMagentoRegisterService;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();

  let mockLoginInfo: DaffLoginInfo;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoRegisterService,
      ]
    });

    registerService = TestBed.get(DaffMagentoRegisterService);
    controller = TestBed.get(ApolloTestingController);

    mockRegistration = registrationFactory.create();

    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = {email, password};
  });

  it('should be created', () => {
    expect(registerService).toBeTruthy();
  });

  describe('register | creating a customer and getting login info', () => {
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

    it('should return the login info', done => {
      registerService.register(mockRegistration).subscribe(loginInfo => {
        expect(loginInfo).toEqual(mockLoginInfo);
        done();
      });

      const op = controller.expectOne(createCustomerMutation);

      op.flush({
        data: response
      });
    });
  });
});
