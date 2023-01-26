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

import { DaffCart } from '@daffodil/cart';
import { schema } from '@daffodil/driver/magento';
import { DaffOrder } from '@daffodil/order';
import {
  DaffOrderInvalidAPIResponseError,
  DaffOrderNotFoundError,
} from '@daffodil/order/driver';
import {
  MagentoOrder,
  MagentoGetGuestOrdersResponse,
  getGuestOrders,
} from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderTestDataFactory } from './helpers/public_api';
import { DaffOrderMagentoService } from './order.service';

describe('@daffodil/order/driver/magento/2.4.1 | DaffOrderMagentoService', () => {
  let service: DaffOrderMagentoService;
  let controller: ApolloTestingController;
  let testDataFactory: MagentoOrderTestDataFactory;

  let cartId: DaffCart['id'];
  let orderId: DaffOrder['id'];
  let mockDaffOrder: DaffOrder;
  let mockMagentoOrder: MagentoOrder;
  let mockGetOrdersResponse: MagentoGetGuestOrdersResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffOrderMagentoService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffOrderMagentoService);
    controller = TestBed.inject(ApolloTestingController);
    testDataFactory = TestBed.inject(MagentoOrderTestDataFactory);

    const testData = testDataFactory.create();
    mockDaffOrder = testData.mockDaffOrder;
    mockMagentoOrder = testData.mockMagentoOrder;

    orderId = mockDaffOrder.id;
    cartId = 'cartId';

    mockGetOrdersResponse = {
      graycoreGuestOrders: {
        __typename: 'GraycoreGuestOrders',
        items: [mockMagentoOrder],
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a single order by ID', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('and the response fails validation', () => {
        beforeEach(() => {
          mockGetOrdersResponse.graycoreGuestOrders.items = null;
        });

        it('should throw a DaffOrderInvalidAPIResponseError', done => {
          service.list(cartId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffOrderInvalidAPIResponseError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(getGuestOrders([])));

          op.flush({
            data: mockGetOrdersResponse,
          });
        });
      });

      describe('and the response passes validation', () => {
        describe('and the order is found', () => {
          it('should return the correct Daffodil order', done => {
            service.get(orderId, cartId).subscribe(result => {
              expect(result).toEqual(jasmine.objectContaining({
                id: orderId,
                extra_attributes: jasmine.anything(),
              }));
              done();
            });

            const op = controller.expectOne(addTypenameToDocument(getGuestOrders([])));

            op.flush({
              data: mockGetOrdersResponse,
            });
          });
        });

        describe('and the order is not found', () => {
          let notOrderId;

          beforeEach(() => {
            notOrderId = 'notOrderId';
          });

          it('should throw a DaffOrderNotFoundError', done => {
            const expected = new DaffOrderNotFoundError(`Could not find an order with ID ${notOrderId}`);

            service.get(notOrderId, cartId).subscribe(result => {
              fail();
              done();
            }, error => {
              expect(error).toEqual(expected);
              done();
            });

            const op = controller.expectOne(addTypenameToDocument(getGuestOrders([])));

            op.flush({
              data: mockGetOrdersResponse,
            });
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.get(orderId, cartId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getGuestOrders([])));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a cart with that ID.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });
    });
  });

  describe('list | listing the available orders', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('and the response passes validation', () => {
        it('should return the list of Daffodil orders', done => {
          service.list(cartId).subscribe(result => {
            expect(result.data[orderId]).toEqual(jasmine.objectContaining({
              id: orderId,
            }));
            expect(result.metadata.ids).toEqual([orderId]);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(getGuestOrders([])));

          op.flush({
            data: mockGetOrdersResponse,
          });
        });
      });

      describe('and the response fails validation', () => {
        beforeEach(() => {
          mockGetOrdersResponse.graycoreGuestOrders.items = null;
        });

        it('should throw a DaffOrderInvalidAPIResponseError', done => {
          service.list(cartId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffOrderInvalidAPIResponseError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(getGuestOrders([])));

          op.flush({
            data: mockGetOrdersResponse,
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.list(cartId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getGuestOrders([])));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a cart with that ID.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
