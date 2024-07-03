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

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  getCustomerOrder,
  getCustomerOrders,
  MagentoCustomerOrder,
  MagentoCustomerOrders,
  MagentoGetCustomerOrderResponse,
  MagentoGetCustomerOrdersResponse,
} from '@daffodil/customer-order/driver/magento/2-4-5';
import { MagentoCustomerOrdersFactory } from '@daffodil/customer-order/driver/magento/2-4-5/testing';
import {
  DaffDriverMagentoError,
  schema,
} from '@daffodil/driver/magento';

import { DaffCustomerOrderMagentoService } from './order.service';

describe('@daffodil/customer-order/driver/magento/2-4-5 | DaffCustomerOrderMagentoService', () => {
  let service: DaffCustomerOrderMagentoService;
  let controller: ApolloTestingController;
  let authStorageSpy: jasmine.SpyObj<DaffAuthStorageService>;

  let magentoOrdersFactory: MagentoCustomerOrdersFactory;

  let mockMagentoOrders: MagentoCustomerOrders;
  let mockMagentoOrder: MagentoCustomerOrder;
  let mockGetOrdersResponse: MagentoGetCustomerOrdersResponse;
  let mockGetOrderResponse: MagentoGetCustomerOrderResponse;

  beforeEach(() => {
    authStorageSpy = jasmine.createSpyObj('DaffAuthStorageService', ['getAuthToken']);

    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffCustomerOrderMagentoService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
        {
          provide: DaffAuthStorageService,
          useValue: authStorageSpy,
        },
      ],
    });

    service = TestBed.inject(DaffCustomerOrderMagentoService);
    controller = TestBed.inject(ApolloTestingController);

    magentoOrdersFactory = TestBed.inject(MagentoCustomerOrdersFactory);

    mockMagentoOrders = magentoOrdersFactory.create();
    mockMagentoOrder = mockMagentoOrders.items[0];
    mockGetOrdersResponse = {
      customer: {
        email: 'email',
        orders: mockMagentoOrders,
      },
    };
    mockGetOrderResponse = {
      customer: {
        email: 'email',
        orders: {
          items: [mockMagentoOrder],
        },
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when the customer is logged in', () => {
    beforeEach(() => {
      authStorageSpy.getAuthToken.and.returnValue('token');
    });

    describe('list', () => {
      describe('when the call to the Magento API is successful', () => {
        it('should return the order collection', done => {
          service.list().subscribe((result) => {
            mockMagentoOrders.items.forEach((item) => {
              expect(result.data[item.number]).toEqual(jasmine.objectContaining({ id: item.number }));
              expect(result.metadata.ids).toContain(item.number);
            });
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(getCustomerOrders()));

          op.flush({
            data: mockGetOrdersResponse,
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

          const op = controller.expectOne(addTypenameToDocument(getCustomerOrders()));

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
        it('should return the order collection', done => {
          service.get(mockMagentoOrder.id).subscribe((result) => {
            expect(result).toEqual(jasmine.objectContaining({ id: mockMagentoOrder.number }));
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(getCustomerOrder()));

          op.flush({
            data: mockGetOrderResponse,
          });
        });
      });

      describe('when the call to the Magento API is unsuccessful', () => {
        it('should throw a general Magento driver error', done => {
          service.get(mockMagentoOrder.id).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(getCustomerOrder()));

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
});
