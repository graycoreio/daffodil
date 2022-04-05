import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { cold } from 'jasmine-marbles';
import { catchError } from 'rxjs/operators';

import {
  DaffAuthToken,
  DaffLoginInfo,
  DaffAccountRegistration,
  DaffAuthInvalidAPIResponseError,
  DaffAuthenticationFailedError,
  DaffUnauthorizedError,
} from '@daffodil/auth';
import {
  DaffMagentoAuthTransformerService,
  generateTokenMutation,
  MagentoRevokeCustomerTokenResponse,
  revokeCustomerTokenMutation,
} from '@daffodil/auth/driver/magento';
import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory,
} from '@daffodil/auth/testing';

import { DaffMagentoLoginService } from './login.service';

describe('Driver | Magento | Auth | LoginService', () => {
  let controller: ApolloTestingController;
  let service: DaffMagentoLoginService;

  const authTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoAuthTransformerService', ['transform']);

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;
  let mockLoginInfo: DaffLoginInfo;
  let token: string;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoLoginService,
        {
          provide: DaffMagentoAuthTransformerService,
          useValue: authTransformerServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffMagentoLoginService);
    controller = TestBed.inject(ApolloTestingController);

    mockRegistration = registrationFactory.create();
    mockAuth = authTokenFactory.create();

    token = mockAuth.token;
    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = { email, password };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login | logging the user in and getting an auth token', () => {
    describe('when the call to the Magento API is successful', () => {
      let response;

      beforeEach(() => {
        response = {
          generateCustomerToken: {
            token,
          },
        };

        authTransformerServiceSpy.transform.withArgs(response.generateCustomerToken).and.returnValue(mockAuth);
      });

      describe('and the response passes validation', () => {

        it('should call the transformer with the generate token response', done => {
          service.login(mockLoginInfo).subscribe(auth => {
            expect(authTransformerServiceSpy.transform).toHaveBeenCalledWith(response.generateCustomerToken);
            done();
          });

          const op = controller.expectOne(generateTokenMutation);

          op.flush({
            data: response,
          });
        });

        it('should return the authentication token', done => {
          service.login(mockLoginInfo).subscribe((auth) => {
            expect(auth).toEqual(mockAuth);
            done();
          });

          const op = controller.expectOne(generateTokenMutation);

          op.flush({
            data: response,
          });
        });
      });

      describe('and the response fails validation', () => {
        beforeEach(() => {
          response = {
            generateCustomerToken: {
              token: null,
            },
          };
        });

        it('should throw a DaffAuthInvalidAPIResponseError', done => {
          service.login(mockLoginInfo).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffAuthInvalidAPIResponseError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(generateTokenMutation);

          op.flush({
            data: response,
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffAuthenticationFailedError', done => {
        service.login(mockLoginInfo).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffAuthenticationFailedError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(generateTokenMutation);

        op.graphqlErrors([new GraphQLError(
          'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-authentication' },
        )]);
      });
    });
  });

  describe('logout | revoking an auth token', () => {
    let response: MagentoRevokeCustomerTokenResponse;
    let result: boolean;

    afterEach(() => {
      controller.verify();
    });

    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        result = true;
        response = {
          revokeCustomerToken: {
            result,
          },
        };
      });

      describe('and the response passes validation', () => {

        it('should return void and not throw an error', () => {
          const expected = cold('-', {});

          expect(service.logout()).toBeObservable(expected);

          const op = controller.expectOne(revokeCustomerTokenMutation);

          op.flush({
            data: response,
          });
        });
      });

      describe('and the response fails validation', () => {
        beforeEach(() => {
          response = {
            revokeCustomerToken: {
              result: null,
            },
          };
        });

        // TODO: test for specific errors
        it('should throw an error', done => {
          service.logout().pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffAuthInvalidAPIResponseError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(revokeCustomerTokenMutation);

          op.flush({
            data: response,
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffUnauthorizedError', done => {
        service.logout().pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffUnauthorizedError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(revokeCustomerTokenMutation);

        op.graphqlErrors([new GraphQLError(
          'The current customer isn\'t authorized.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-authorization' },
        )]);
      });
    });
  });
});
