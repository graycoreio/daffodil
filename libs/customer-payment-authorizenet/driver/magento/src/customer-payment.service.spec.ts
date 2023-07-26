import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';
import {
  DaffMagentoAuthorizeNetService,
  MagentoAuthorizeNetPayment,
} from '@daffodil/authorizenet/driver/magento';
import { DaffCustomerPayment } from '@daffodil/customer-payment';
import {
  DaffCustomerPaymentAuthorizeNet,
  DaffCustomerPaymentAuthorizeNetRequest,
} from '@daffodil/customer-payment-authorizenet';
import {
  MagentoTokenBaseCard,
  createTokenBaseCard,
  updateTokenBaseCard,
  deleteTokenBaseCard,
  getCustomerPayments,
  MagentoGetCustomerPaymentsResponse,
  MagentoCreateCustomerPaymentResponse,
  MagentoDeleteCustomerPaymentResponse,
  MagentoUpdateCustomerPaymentResponse,
  magentoCustomerPaymentUpdateInputTransform,
  magentoCustomerPaymentCreateInputTransform,
  MagentoGetCustomerPaymentResponse,
  getCustomerPayment,
} from '@daffodil/customer-payment-authorizenet/driver/magento';
import { MagentoTokenBaseCardFactory } from '@daffodil/customer-payment-authorizenet/driver/magento/testing';
import {
  DaffCustomerPaymentAuthorizeNetFactory,
  DaffCustomerPaymentAuthorizeNetRequestFactory,
} from '@daffodil/customer-payment-authorizenet/testing';
import {
  DaffDriverMagentoError,
  schema,
} from '@daffodil/driver/magento';

import { DaffCustomerPaymentAuthorizeNetMagentoService } from './customer-payment.service';

describe('@daffodil/customer-payment-authorizenet/driver/magento | DaffCustomerPaymentAuthorizeNetMagentoService', () => {
  let service: DaffCustomerPaymentAuthorizeNetMagentoService;
  let controller: ApolloTestingController;

  let magentoCustomerPaymentFactory: MagentoTokenBaseCardFactory;
  let requestFactory: DaffCustomerPaymentAuthorizeNetRequestFactory;
  let anetPaymentFactory: DaffCustomerPaymentAuthorizeNetFactory;
  let anetDriverSpy: jasmine.SpyObj<DaffMagentoAuthorizeNetService>;

  let paymentMethod: string;
  let mockAnetResponse: MagentoAuthorizeNetPayment;
  let mockAnetPayment: DaffCustomerPaymentAuthorizeNet;
  let paymentId: DaffCustomerPayment['id'];
  let mockRequest: DaffCustomerPaymentAuthorizeNetRequest;
  let mockMagentoPayment: MagentoTokenBaseCard;
  let mockGetPaymentsResponse: MagentoGetCustomerPaymentsResponse;
  let mockGetPaymentResponse: MagentoGetCustomerPaymentResponse;
  let mockCreatePaymentResponse: MagentoCreateCustomerPaymentResponse;
  let mockUpdatePaymentResponse: MagentoUpdateCustomerPaymentResponse;
  let mockDeletePaymentResponse: MagentoDeleteCustomerPaymentResponse;

  beforeEach(() => {
    paymentMethod = 'paymentMethod';
    anetDriverSpy = jasmine.createSpyObj('DaffMagentoAuthorizeNetService', ['generateToken']);

    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffCustomerPaymentAuthorizeNetMagentoService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
        {
          provide: DaffAuthorizeNetPaymentId,
          useValue: paymentMethod,
        },
        {
          provide: DaffMagentoAuthorizeNetService,
          useValue: anetDriverSpy,
        },
      ],
    });

    service = TestBed.inject(DaffCustomerPaymentAuthorizeNetMagentoService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCustomerPaymentFactory = TestBed.inject(MagentoTokenBaseCardFactory);
    requestFactory = TestBed.inject(DaffCustomerPaymentAuthorizeNetRequestFactory);
    anetPaymentFactory = TestBed.inject(DaffCustomerPaymentAuthorizeNetFactory);

    mockAnetPayment = anetPaymentFactory.create();
    mockRequest = requestFactory.create();
    mockMagentoPayment = magentoCustomerPaymentFactory.create();
    paymentId = mockMagentoPayment.hash;
    mockAnetResponse = {
      code: 'authorizenet_acceptjs',
      authorizenet_acceptjs: {
        cc_last_4: 1111,
        opaque_data_descriptor: 'COMMON.ACCEPT.INAPP.PAYMENT',
        opaque_data_value: 'paymentNonce',
      },
    };
    mockGetPaymentsResponse = {
      tokenBaseCards: [mockMagentoPayment],
    };
    mockGetPaymentResponse = {
      tokenBaseCards: [mockMagentoPayment],
    };
    mockCreatePaymentResponse = {
      createTokenBaseCard: mockMagentoPayment,
    };
    mockUpdatePaymentResponse = {
      updateTokenBaseCard: mockMagentoPayment,
    };
    mockDeletePaymentResponse = {
      deleteTokenBaseCard: true,
    };
    anetDriverSpy.generateToken.and.returnValue(of(mockAnetResponse));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the payment', done => {
        service.list().subscribe((result) => {
          expect(result).toEqual([jasmine.objectContaining({ id: paymentId })]);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomerPayments));

        op.flush({
          data: mockGetPaymentsResponse,
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

        const op = controller.expectOne(addTypenameToDocument(getCustomerPayments));

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
      it('should return the payment', done => {
        service.get(paymentId).subscribe((result) => {
          expect(result.id).toEqual(paymentId);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomerPayment));

        op.flush({
          data: mockGetPaymentResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.get(paymentId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getCustomerPayment));

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
      it('should return the payment', done => {
        service.update(mockAnetPayment).subscribe((result) => {
          expect(result).toEqual([jasmine.objectContaining({ id: paymentId })]);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateTokenBaseCard));

        op.flush({
          data: mockUpdatePaymentResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerPayments));

        getOp.flush({
          data: mockGetPaymentsResponse,
        });
      });

      it('should should send the payment input', done => {
        service.update(mockAnetPayment).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateTokenBaseCard));
        expect(op.operation.variables.input).toEqual(magentoCustomerPaymentUpdateInputTransform(mockAnetPayment, paymentMethod));

        op.flush({
          data: mockUpdatePaymentResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerPayments));

        getOp.flush({
          data: mockGetPaymentsResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.update(mockAnetPayment).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateTokenBaseCard));

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
      it('should return the payments', done => {
        service.add(mockRequest).subscribe((result) => {
          expect(result).toContain(jasmine.objectContaining({ id: paymentId }));
          done();
        });

        const createOp = controller.expectOne(addTypenameToDocument(createTokenBaseCard));

        createOp.flush({
          data: mockCreatePaymentResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerPayments));

        getOp.flush({
          data: mockGetPaymentsResponse,
        });
      });

      it('should should send the payment', done => {
        service.add(mockRequest).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(createTokenBaseCard));
        expect(op.operation.variables.input).toEqual(magentoCustomerPaymentCreateInputTransform(mockRequest, mockAnetResponse, paymentMethod));

        op.flush({
          data: mockCreatePaymentResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerPayments));

        getOp.flush({
          data: mockGetPaymentsResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.add(mockRequest).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(createTokenBaseCard));

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
      it('should return the payments', done => {
        service.delete(paymentId).subscribe((result) => {
          expect(result).toEqual([jasmine.objectContaining({ id: paymentId })]);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(deleteTokenBaseCard));

        op.flush({
          data: mockDeletePaymentResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerPayments));

        getOp.flush({
          data: mockGetPaymentsResponse,
        });
      });

      it('should should send the id', done => {
        service.delete(paymentId).subscribe((result) => {
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(deleteTokenBaseCard));
        expect(op.operation.variables.id).toEqual(paymentId);

        op.flush({
          data: mockDeletePaymentResponse,
        });

        const getOp = controller.expectOne(addTypenameToDocument(getCustomerPayments));

        getOp.flush({
          data: mockGetPaymentsResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.delete(paymentId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(deleteTokenBaseCard));

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
