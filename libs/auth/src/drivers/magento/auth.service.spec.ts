import { TestBed } from '@angular/core/testing';
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

describe('Driver | Magento | Auth | AuthService', () => {
  let controller: ApolloTestingController;
  let service: DaffMagentoAuthService;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();
  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let validatorSpy: jasmine.Spy;

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
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoAuthService,
      ]
    });

    service = TestBed.get(DaffMagentoAuthService);
    controller = TestBed.get(ApolloTestingController);

    mockRegistration = registrationFactory.create();
    mockAuth = authTokenFactory.create();

    validatorSpy = jasmine.createSpy();
    spyOnProperty(validators, 'validateCheckTokenResponse').and.returnValue(validatorSpy);

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
          validatorSpy.and.returnValue({data: response})
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
          validatorSpy.and.callFake(() => {
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
});
