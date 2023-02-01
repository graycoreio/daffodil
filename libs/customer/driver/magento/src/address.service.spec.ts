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

import { DaffCustomerAddress } from '@daffodil/customer';
import {
  MagentoCustomerAddress,
  MagentoChangeEmailResponse,
  createCustomerAddress,
  magentoCustomerAddressInputTransform,
  updateCustomerAddress,
  deleteCustomerAddress,
  MagentoGetCustomerAddressesResponse,
  MagentoCreateCustomerAddressResponse,
  MagentoDeleteCustomerAddressResponse,
  MagentoUpdateCustomerAddressResponse,
  getCustomerAddresses,
} from '@daffodil/customer/driver/magento';
import { MagentoCustomerAddressFactory } from '@daffodil/customer/driver/magento/testing';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';
import {
  DaffDriverMagentoError,
  schema,
} from '@daffodil/driver/magento';

import { DaffCustomerMagentoAddressService } from './address.service';

describe('@daffodil/customer/driver/magento | DaffCustomerMagentoAddressService', () => {
  let service: DaffCustomerMagentoAddressService;
  let controller: ApolloTestingController;

  let magentoCustomerAddressFactory: MagentoCustomerAddressFactory;
  let addressFactory: DaffCustomerAddressFactory;

  let addressId: DaffCustomerAddress['id'];
  let mockAddress: DaffCustomerAddress;
  let mockMagentoAddress: MagentoCustomerAddress;
  let mockGetAddressesResponse: MagentoGetCustomerAddressesResponse;
  let mockCreateAddressResponse: MagentoCreateCustomerAddressResponse;
  let mockUpdateAddressResponse: MagentoUpdateCustomerAddressResponse;
  let mockDeleteAddressResponse: MagentoDeleteCustomerAddressResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffCustomerMagentoAddressService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffCustomerMagentoAddressService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCustomerAddressFactory = TestBed.inject(MagentoCustomerAddressFactory);
    addressFactory = TestBed.inject(DaffCustomerAddressFactory);

    mockAddress = addressFactory.create();
    mockMagentoAddress = magentoCustomerAddressFactory.create();
    addressId = String(mockMagentoAddress.id);
    mockGetAddressesResponse = {
      customer: {
        addresses: [mockMagentoAddress],
      },
    };
    mockCreateAddressResponse = {
      createCustomerAddress: mockMagentoAddress,
    };
    mockUpdateAddressResponse = {
      updateCustomerAddress: mockMagentoAddress,
    };
    mockDeleteAddressResponse = {
      deleteCustomerAddress: true,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the address', done => {
        service.list().subscribe((result) => {
          expect(result).toEqual([jasmine.objectContaining({ id: String(mockMagentoAddress.id) })]);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

        op.flush({
          data: mockGetAddressesResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.list().pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

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

  describe('get', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the address', done => {
        service.get(addressId).subscribe((result) => {
          expect(result.id).toEqual(String(mockMagentoAddress.id));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

        op.flush({
          data: mockGetAddressesResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.get(addressId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

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
    describe('when the call to the Magento API is successful', () => {
      it('should return the address', done => {
        service.update(mockAddress).subscribe((result) => {
          expect(result).toEqual([jasmine.objectContaining({ id: String(mockMagentoAddress.id) })]);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateCustomerAddress));

        op.flush({
          data: mockUpdateAddressResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

        getOp.flush({
          data: mockGetAddressesResponse,
        });
      });

      it('should should send the address input', done => {
        service.update(mockAddress).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateCustomerAddress));
        expect(op.operation.variables.input).toEqual(magentoCustomerAddressInputTransform(mockAddress));
        expect(op.operation.variables.id).toEqual(Number(addressId));

        op.flush({
          data: mockUpdateAddressResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

        getOp.flush({
          data: mockGetAddressesResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.update(mockAddress).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateCustomerAddress));

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

  describe('add', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the addresses', done => {
        service.add(mockAddress).subscribe((result) => {
          expect(result).toContain(jasmine.objectContaining({ id: String(mockMagentoAddress.id) }));
          done();
        });

        const createOp = controller.expectOne(addTypenameToDocument(createCustomerAddress));

        createOp.flush({
          data: mockCreateAddressResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

        getOp.flush({
          data: mockGetAddressesResponse,
        });
      });

      it('should should send the address', done => {
        service.add(mockAddress).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(createCustomerAddress));
        expect(op.operation.variables.input).toEqual(magentoCustomerAddressInputTransform(mockAddress));

        op.flush({
          data: mockCreateAddressResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

        getOp.flush({
          data: mockGetAddressesResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.add(mockAddress).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(createCustomerAddress));

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

  describe('delete', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the addresses', done => {
        service.delete(addressId).subscribe((result) => {
          expect(result).toEqual([jasmine.objectContaining({ id: String(mockMagentoAddress.id) })]);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(deleteCustomerAddress));

        op.flush({
          data: mockDeleteAddressResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

        getOp.flush({
          data: mockGetAddressesResponse,
        });
      });

      it('should should send the id', done => {
        service.delete(addressId).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(deleteCustomerAddress));
        expect(op.operation.variables.id).toEqual(Number(addressId));

        op.flush({
          data: mockDeleteAddressResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerAddresses));

        getOp.flush({
          data: mockGetAddressesResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.delete(addressId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(deleteCustomerAddress));

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
