import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import { DaffCustomer } from '@daffodil/customer';
import {
  getCustomer,
  MagentoGetCustomerResponse,
  MagentoCustomer,
  MagentoChangeEmailResponse,
  updateEmail,
  magentoCustomerInputTransform,
  updateCustomer,
  changePassword,
  MagentoChangePasswordResponse,
  MagentoUpdateCustomerResponse,
} from '@daffodil/customer/driver/magento';
import { MagentoCustomerFactory } from '@daffodil/customer/driver/magento/testing';
import { DaffCustomerFactory } from '@daffodil/customer/testing';
import {
  DaffDriverMagentoError,
  schema,
} from '@daffodil/driver/magento';

import { DaffCustomerMagentoService } from './customer.service';

describe('@daffodil/customer/driver/magento | DaffCustomerMagentoService', () => {
  let service: DaffCustomerMagentoService;
  let controller: ApolloTestingController;

  let magentoCustomerFactory: MagentoCustomerFactory;
  let customerFactory: DaffCustomerFactory;

  let mockMagentoCustomer: MagentoCustomer;
  let mockGetCustomerResponse: MagentoGetCustomerResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffCustomerMagentoService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffCustomerMagentoService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCustomerFactory = TestBed.inject(MagentoCustomerFactory);
    customerFactory = TestBed.inject(DaffCustomerFactory);

    mockMagentoCustomer = magentoCustomerFactory.create();
    mockGetCustomerResponse = {
      customer: mockMagentoCustomer,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the customer', done => {
        service.get().subscribe((result) => {
          expect(result.id).toEqual(mockMagentoCustomer.email);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomer));

        op.flush({
          data: mockGetCustomerResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.get().pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getCustomer));

        op.graphqlErrors([new GraphQLError(
          'Generic error.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql' },
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update', () => {
    let mockCustomer: DaffCustomer;

    beforeEach(() => {
      mockCustomer = customerFactory.create();
    });

    describe('when the call to the Magento API is successful', () => {
      let response: MagentoUpdateCustomerResponse;

      beforeEach(() => {
        response = {
          updateCustomerV2: {
            customer: mockMagentoCustomer,
          },
        };
      });

      it('should return the customer', done => {
        service.update(mockCustomer).subscribe((result) => {
          expect(result.id).toEqual(mockMagentoCustomer.email);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateCustomer));

        op.flush({
          data: response,
        });
      });

      it('should should send the customer input', done => {
        service.update(mockCustomer).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateCustomer));
        expect(op.operation.variables.customer).toEqual(magentoCustomerInputTransform(mockCustomer));

        op.flush({
          data: response,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.update(mockCustomer).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateCustomer));

        op.graphqlErrors([new GraphQLError(
          'Generic error.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql' },
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('changeEmail', () => {
    let email: string;
    let password: string;

    beforeEach(() => {
      email = 'email';
      password = 'password';
    });

    describe('when the call to the Magento API is successful', () => {
      let response: MagentoChangeEmailResponse;

      beforeEach(() => {
        response = {
          updateCustomerEmail: {
            customer: mockMagentoCustomer,
          },
        };
      });

      it('should return the customer', done => {
        service.changeEmail(email, password).subscribe((result) => {
          expect(result.id).toEqual(mockMagentoCustomer.email);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateEmail));

        op.flush({
          data: response,
        });
      });

      it('should should send the email and password', done => {
        service.changeEmail(email, password).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateEmail));
        expect(op.operation.variables.email).toEqual(email);
        expect(op.operation.variables.password).toEqual(password);

        op.flush({
          data: response,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.changeEmail(email, password).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateEmail));

        op.graphqlErrors([new GraphQLError(
          'Generic error.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql' },
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('changePassword', () => {
    let oldPassword: string;
    let newPassword: string;

    beforeEach(() => {
      oldPassword = 'oldPassword';
      newPassword = 'newPassword';
    });

    describe('when the call to the Magento API is successful', () => {
      let response: MagentoChangePasswordResponse;

      beforeEach(() => {
        response = {
          changeCustomerPassword: {
            email: mockMagentoCustomer.email,
          },
        };
      });

      it('should return', done => {
        service.changePassword(oldPassword, newPassword).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(changePassword));

        op.flush({
          data: response,
        });
      });

      it('should should send the old and new password', done => {
        service.changePassword(oldPassword, newPassword).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(changePassword));
        expect(op.operation.variables.old).toEqual(oldPassword);
        expect(op.operation.variables.new).toEqual(newPassword);

        op.flush({
          data: response,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.changePassword(oldPassword, newPassword).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(changePassword));

        op.graphqlErrors([new GraphQLError(
          'Generic error.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql' },
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
