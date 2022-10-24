import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  DaffLoginInfo,
  DaffAccountRegistration,
  DaffAuthToken,
} from '@daffodil/auth';
import {
  createCustomerMutation,
  DaffMagentoLoginService,
  MagentoRegisterResponse,
} from '@daffodil/auth/driver/magento';
import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory,
} from '@daffodil/auth/testing';
import { DaffBadInputError } from '@daffodil/driver';

import { DaffMagentoRegisterService } from './register.service';

describe('@daffodil/auth/driver/magento | RegisterService', () => {
  let controller: ApolloTestingController;
  let service: DaffMagentoRegisterService;
  let loginServiceSpy: jasmine.SpyObj<DaffMagentoLoginService>;

  let registrationFactory: DaffAccountRegistrationFactory;
  let authTokenFactory: DaffAuthTokenFactory;

  let mockLoginInfo: DaffLoginInfo;
  let email: string;
  let password: string;
  let mockRegistration: DaffAccountRegistration;
  let token: string;
  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    loginServiceSpy = jasmine.createSpyObj('DaffMagentoLoginService', ['login']);

    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoRegisterService,
        {
          provide: DaffMagentoLoginService,
          useValue: loginServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffMagentoRegisterService);
    controller = TestBed.inject(ApolloTestingController);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);
    authTokenFactory = TestBed.inject(DaffAuthTokenFactory);

    mockRegistration = registrationFactory.create();
    mockAuth = authTokenFactory.create();

    token = mockAuth.token;
    email = mockRegistration.email;
    password = mockRegistration.password;
    mockLoginInfo = { email, password };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('register', () => {
    let response: MagentoRegisterResponse;

    afterEach(() => {
      controller.verify();
    });

    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        response = {
          createCustomerV2: {
            customer: {
              email: mockRegistration.email,
            },
          },
        };
        loginServiceSpy.login.withArgs({ email: mockRegistration.email, password: mockRegistration.password }).and.returnValue(of({ token }));
      });

      it('should return the login info and not throw an error', done => {
        service.register(mockRegistration).subscribe(() => {
          done();
        });

        const op = controller.expectOne(createCustomerMutation);

        op.flush({
          data: response,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffBadInputError', done => {
        service.register(mockRegistration).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffBadInputError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(createCustomerMutation);

        op.graphqlErrors([new GraphQLError(
          'Required parameters are missing: First Name',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-input' },
        )]);
      });
    });
  });

  describe('registerOnly', () => {
    let response: MagentoRegisterResponse;

    afterEach(() => {
      controller.verify();
    });

    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        response = {
          createCustomerV2: {
            customer: {
              email: mockRegistration.email,
            },
          },
        };
      });

      it('should return the login info and not throw an error', done => {
        service.registerOnly(mockRegistration).subscribe(() => {
          done();
        });

        const op = controller.expectOne(createCustomerMutation);

        op.flush({
          data: response,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffBadInputError', done => {
        service.registerOnly(mockRegistration).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffBadInputError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(createCustomerMutation);

        op.graphqlErrors([new GraphQLError(
          'Required parameters are missing: First Name',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-input' },
        )]);
      });
    });
  });
});
