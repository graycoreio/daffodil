import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { cold } from 'jasmine-marbles';
import { catchError } from 'rxjs/operators';
import { GraphQLError } from 'graphql';

import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory
} from '@daffodil/auth/testing';

import { DaffMagentoAuthService } from './auth.service';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { checkTokenQuery, MagentoCheckTokenResponse } from './queries/public_api';
import { DaffUnauthorizedError, DaffInvalidAPIResponseError } from '../../errors/public_api';
import * as validators from './validators/public_api';
import { RestApiUrlConfig } from '../../config/rest-api-url.token';

describe('Driver | Magento | Auth | AuthService', () => {
  let controller: ApolloTestingController;
  let httpController: HttpTestingController;
  let service: DaffMagentoAuthService;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  const restApiUrl = 'RestApiUrl';

  let checkTokenValidatorSpy: jasmine.Spy;
  let resetPasswordValidatorSpy: jasmine.Spy;

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
        HttpClientTestingModule
      ],
      providers: [
        DaffMagentoAuthService,
        {
          provide: RestApiUrlConfig,
          useValue: restApiUrl
        }
      ]
    });

    service = TestBed.get(DaffMagentoAuthService);
    controller = TestBed.get(ApolloTestingController);
    httpController = TestBed.get(HttpTestingController);

    mockRegistration = registrationFactory.create();
    mockAuth = authTokenFactory.create();

    checkTokenValidatorSpy = jasmine.createSpy();
    resetPasswordValidatorSpy = jasmine.createSpy();
    spyOnProperty(validators, 'validateCheckTokenResponse').and.returnValue(checkTokenValidatorSpy);
    spyOnProperty(validators, 'validateResetPasswordResponse').and.returnValue(checkTokenValidatorSpy);

    token = mockAuth.token;
    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = {email, password};
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('check | checking the status of an access token', () => {
    let response: MagentoCheckTokenResponse;
    let id: number;

    afterEach(() => {
      controller.verify();
    });

    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        id = 4;
        response = {
          customer: {
            id
          }
        };
      });

      describe('and the response passes validation', () => {
        beforeEach(() => {
          checkTokenValidatorSpy.and.returnValue({data: response})
        });

        it('should return void and not throw an error', () => {
          const expected = cold('-', {});

          expect(service.check()).toBeObservable(expected);

          const op = controller.expectOne(checkTokenQuery);

          op.flush({
            data: response
          });
        });
      });

      describe('and the response fails validation', () => {
        beforeEach(() => {
          checkTokenValidatorSpy.and.callFake(() => {
            throw new DaffInvalidAPIResponseError('Check token response is invalid.')
          });
        });

        it('should throw a DaffInvalidAPIResponseError', done => {
          service.check().pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffInvalidAPIResponseError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(checkTokenQuery);

          op.flush({
            data: response
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffUnauthorizedError', done => {
        service.check().pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffUnauthorizedError));
            done();
            return [];
          })
        ).subscribe();

        const op = controller.expectOne(checkTokenQuery);

        op.graphqlErrors([new GraphQLError(
          'The current customer isn\'t authorized.',
          null,
          null,
          null,
          null,
          null,
          {category: 'graphql-authorization'}
        )]);
      });
    });
  });

  describe('resetPassword | resetting the customer\'s password', () => {
    const resetPasswordUrl = `${restApiUrl}/V1/customers/password`;
    let response;

    afterEach(() => {
      controller.verify();
    });

    describe('when the call to the Magento API is successful', () => {
      describe('and the response passes validation', () => {
        beforeEach(() => {
          response = 'true';
          resetPasswordValidatorSpy.and.returnValue(response)
        });

        it('should return void and not throw an error', () => {
          const expected = cold('-', {});

          expect(service.resetPassword(email)).toBeObservable(expected);

          const op = httpController.expectOne(resetPasswordUrl);

          op.flush(response);
        });
      });

      describe('and the response fails validation', () => {
        beforeEach(() => {
          response = 'false';
          checkTokenValidatorSpy.and.callFake(() => {
            throw new DaffInvalidAPIResponseError('Reset password request was not successful.')
          });
        });

        it('should throw a DaffInvalidAPIResponseError', done => {
          service.resetPassword(email).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffInvalidAPIResponseError));
              done();
              return [];
            })
          ).subscribe();

          const op = httpController.expectOne(resetPasswordUrl);

          op.flush(response);
        });
      });
    });

    // skipped until REST errors are handled by the error transform
    xdescribe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.resetPassword(email).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          })
        ).subscribe();

        const op = httpController.expectOne(resetPasswordUrl);

        op.error(new ErrorEvent('something broke'));
      });
    });
  });
});
