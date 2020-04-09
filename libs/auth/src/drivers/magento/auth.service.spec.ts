import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { cold } from 'jasmine-marbles';
import { catchError } from 'rxjs/operators';

import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory
} from '@daffodil/auth/testing';

import { DaffMagentoAuthService } from './auth.service';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { checkTokenQuery, MagentoCheckTokenResponse } from './queries/public_api';

describe('Driver | Magento | Auth | AuthService', () => {
  let controller: ApolloTestingController;
  let service: DaffMagentoAuthService;

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

  describe('check | checking an access token', () => {
    let response: MagentoCheckTokenResponse;
    let id: number;

    afterEach(() => {
      controller.verify();
    });

    describe('when the id is present', () => {
      beforeEach(() => {
        id = 4;
        response = {
          customer: {
            id
          }
        };
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

    // TODO: add error handling
    xdescribe('when the id is falsey', () => {
      beforeEach(() => {
        response = {
          customer: {
            id: null
          },
        };
      });

      it('should throw an error', done => {
        service.check().pipe(
          catchError(err => {
            expect(err).toEqual(new Error('Unauthenticated'));
            done();
            return null;
          })
        ).subscribe();

        const op = controller.expectOne(checkTokenQuery);

        op.flush({
          data: response
        });
      });
    });
  });
});
