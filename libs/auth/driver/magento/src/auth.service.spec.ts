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
} from '@daffodil/auth';
import {
  DaffAuthInvalidAPIResponseError,
  DaffUnauthorizedError,
} from '@daffodil/auth/driver';
import { checkTokenQuery } from '@daffodil/auth/driver/magento';
import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory,
} from '@daffodil/auth/testing';

import { DaffMagentoAuthService } from './auth.service';

describe('@daffodil/auth/driver/magento | AuthService', () => {
  let controller: ApolloTestingController;
  let service: DaffMagentoAuthService;

  let registrationFactory: DaffAccountRegistrationFactory;
  const authTokenFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;
  let mockLoginInfo: DaffLoginInfo;
  let token: string;
  let email: string;
  let password: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoAuthService,
      ],
    });

    service = TestBed.inject(DaffMagentoAuthService);
    controller = TestBed.inject(ApolloTestingController);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

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

  describe('check | checking the status of an access token', () => {
    let response;
    let id: number;

    afterEach(() => {
      controller.verify();
    });

    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        id = 4;
      });

      describe('and the response passes validation', () => {
        beforeEach(() => {
          response = {
            customer: {
              id,
            },
          };
        });

        it('should return void and not throw an error', () => {
          const expected = cold('-', {});

          expect(service.check()).toBeObservable(expected);

          const op = controller.expectOne(checkTokenQuery);

          op.flush({
            data: response,
          });
        });
      });

      describe('and the response fails validation', () => {
        beforeEach(() => {
          response = {
            customer: {
              id: null,
            },
          };
        });

        it('should throw a DaffAuthInvalidAPIResponseError', done => {
          service.check().pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffAuthInvalidAPIResponseError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(checkTokenQuery);

          op.flush({
            data: response,
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
          }),
        ).subscribe();

        const op = controller.expectOne(checkTokenQuery);

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
