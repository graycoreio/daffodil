import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import {
  DaffOrder,
} from '@daffodil/order';
import {
  DaffInvalidAPIResponseError,
  DaffOrderNotFoundError,
} from '@daffodil/order/driver';

import {
  MagentoOrder,
} from './models/responses/public_api';
import { DaffOrderMagentoService } from './order.service';
import { getGuestOrders, MagentoGetGuestOrdersResponse } from './queries/public_api';
import * as validators from './validators/public_api';
import { MagentoTestDataFactory } from './helpers/test-data.service';

describe('Driver | Magento | Order | OrderService', () => {
  let service: DaffOrderMagentoService;
  let controller: ApolloTestingController;
  let testDataFactory: MagentoTestDataFactory;

  let validatorSpy: jasmine.Spy;

  let cartId: string;
  let orderId: DaffOrder['id'];
  let mockDaffOrder: DaffOrder;
  let mockMagentoOrder: MagentoOrder;
  let mockGetOrdersResponse: MagentoGetGuestOrdersResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffOrderMagentoService,
      ]
    });

    service = TestBed.get(DaffOrderMagentoService);
    controller = TestBed.get(ApolloTestingController);
    testDataFactory = TestBed.get(MagentoTestDataFactory);

    const testData = testDataFactory.create();
    mockDaffOrder = testData.mockDaffOrder;
    mockMagentoOrder = testData.mockMagentoOrder;

    orderId = mockDaffOrder.id;
    cartId = 'cartId';

    mockGetOrdersResponse = {
      graycoreGuestOrders: {
        items: [mockMagentoOrder]
      }
    };

    validatorSpy = jasmine.createSpy();
    spyOnProperty(validators, 'validateGetOrdersResponse').and.returnValue(validatorSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a single order by ID', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('and the response fails validation', () => {
        beforeEach(() => {
          validatorSpy.and.callFake(() => {
            throw new DaffInvalidAPIResponseError('Get orders response does not contain a valid list of orders.')
          });
        });

        it('should throw a DaffInvalidAPIResponseError', done => {
          service.list(cartId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffInvalidAPIResponseError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(getGuestOrders);

          op.flush({
            data: mockGetOrdersResponse
          });
        });
      });

      describe('and the response passes validation', () => {
        beforeEach(() => {
          validatorSpy.and.returnValue({data: mockGetOrdersResponse});
        });

        describe('and the order is found', () => {
          it('should return the correct Daffodil order', done => {
            service.get(orderId, cartId).subscribe(result => {
              expect(result).toEqual(jasmine.objectContaining(mockDaffOrder));
              done();
            });

            const op = controller.expectOne(getGuestOrders);

            op.flush({
              data: mockGetOrdersResponse
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

            const op = controller.expectOne(getGuestOrders);

            op.flush({
              data: mockGetOrdersResponse
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
          })
        ).subscribe();

        const op = controller.expectOne(getGuestOrders);

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a cart with that ID.',
          null,
          null,
          null,
          null,
          null,
          {category: 'graphql-no-such-entity'}
        )]);
      });
    });
  });

  describe('list | listing the available orders', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('and the response passes validation', () => {
        beforeEach(() => {
          validatorSpy.and.returnValue({data: mockGetOrdersResponse});
        });

        it('should return the list of Daffodil orders', done => {
          service.list(cartId).subscribe(result => {
            expect(result).toEqual([jasmine.objectContaining(mockDaffOrder)]);
            done();
          });

          const op = controller.expectOne(getGuestOrders);

          op.flush({
            data: mockGetOrdersResponse
          });
        });
      });

      describe('and the response fails validation', () => {
        beforeEach(() => {
          validatorSpy.and.callFake(() => {
            throw new DaffInvalidAPIResponseError('Get orders response does not contain a valid list of orders.')
          });
        });

        it('should throw a DaffInvalidAPIResponseError', done => {
          service.list(cartId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffInvalidAPIResponseError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(getGuestOrders);

          op.flush({
            data: mockGetOrdersResponse
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
          })
        ).subscribe();

        const op = controller.expectOne(getGuestOrders);

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a cart with that ID.',
          null,
          null,
          null,
          null,
          null,
          {category: 'graphql-no-such-entity'}
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
