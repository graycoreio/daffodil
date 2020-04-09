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

import { DaffMagentoLoginService } from './login.service';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import {
  generateTokenMutation,
  revokeCustomerTokenMutation,
  MagentoRevokeCustomerTokenResponse
} from './queries/public_api';
import { DaffMagentoAuthTransformerService } from './transforms/auth-transformer.service';

describe('Driver | Magento | Auth | LoginService', () => {
  let controller: ApolloTestingController;
  let service: DaffMagentoLoginService;

  const authTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoAuthTransformerService', ['transform'])

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
        DaffMagentoLoginService,
        {
          provide: DaffMagentoAuthTransformerService,
          useValue: authTransformerServiceSpy
        }
      ]
    });

    service = TestBed.get(DaffMagentoLoginService);
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

      authTransformerServiceSpy.transform.withArgs(response.generateCustomerToken).and.returnValue(mockAuth);
    });

    it('should call the transformer', done => {
      service.login(mockLoginInfo).subscribe(auth => {
        expect(authTransformerServiceSpy.transform).toHaveBeenCalledWith(response.generateCustomerToken);
        done();
      });

      const op = controller.expectOne(generateTokenMutation);

      op.flush({
        data: response
      });
    });

    it('should return an auth token', done => {
      service.login(mockLoginInfo).subscribe((auth) => {
        expect(auth).toEqual(mockAuth);
        done();
      });

      const op = controller.expectOne(generateTokenMutation);

      op.flush({
        data: response
      });
    });
  });

  describe('logout | revoking an access token', () => {
    let response: MagentoRevokeCustomerTokenResponse;
    let result: boolean;

    afterEach(() => {
      controller.verify();
    });

    beforeEach(() => {
      result = true;
      response = {
        revokeCustomerToken: {
          result
        }
      };
    });

    describe('when the result is true', () => {
      it('should return void and not throw an error', () => {
        const expected = cold('-', {});

        expect(service.logout()).toBeObservable(expected);

        const op = controller.expectOne(revokeCustomerTokenMutation);

        op.flush({
          data: response
        });
      });
    });

    // TODO: add error handling
    xdescribe('when the result is false', () => {
      beforeEach(() => {
        result = false;
        response = {
          revokeCustomerToken: {
            result
          }
        };
      });

      it('should throw an error', done => {
        service.logout().pipe(
          catchError(err => {
            expect(err).toEqual(new Error('Token revocation failed'));
            done();
            return null;
          })
        ).subscribe();

        const op = controller.expectOne(revokeCustomerTokenMutation);

        op.flush({
          data: response
        });
      });
    });
  });
});
