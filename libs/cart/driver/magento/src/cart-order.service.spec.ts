import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { catchError } from 'rxjs/operators';
import { GraphQLError } from 'graphql';

import { DaffCart, DaffCartPaymentMethod } from '@daffodil/cart';
import { DaffCartNotFoundError } from '@daffodil/cart/driver';
import { MagentoPlaceOrderResponse, placeOrder } from '@daffodil/cart/driver/magento';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';
import { DaffBadInputError } from '@daffodil/driver';

import { DaffMagentoCartOrderService } from './cart-order.service';

describe('Driver | Magento | Cart | CartOrderService', () => {
  let service: DaffMagentoCartOrderService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let daffCartPaymentFactory: DaffCartPaymentFactory;

  let cartId;
  let orderNumber;
  let mockDaffCart: DaffCart;
  let mockDaffCartPayment: DaffCartPaymentMethod;
  let mockPlaceOrderResponse: MagentoPlaceOrderResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartOrderService,
      ]
    });

    service = TestBed.inject(DaffMagentoCartOrderService);
    controller = TestBed.inject(ApolloTestingController);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    daffCartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);

    mockDaffCart = daffCartFactory.create();
    mockDaffCartPayment = daffCartPaymentFactory.create();

    cartId = mockDaffCart.id;
    orderNumber = '28349539482';
    mockPlaceOrderResponse = {
      placeOrder: {
        order: {
          order_number: orderNumber
        }
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('placeOrder | placing an order for the specified cart', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the order and cart ID', done => {
        service.placeOrder(cartId, mockDaffCartPayment).subscribe(result => {
          expect(String(result.orderId)).toEqual(String(orderNumber));
          expect(String(result.cartId)).toEqual(String(cartId));
          done();
        });

        const op = controller.expectOne(placeOrder);

        op.flush({
          data: mockPlaceOrderResponse
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      describe('because of a graphql-no-such-entity error', () => {
        it('should throw a DaffCartNotFoundError', done => {
          service.placeOrder(cartId, mockDaffCartPayment).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffCartNotFoundError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(placeOrder);

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

      describe('because of a graphql-input error', () => {
        it('should throw a DaffBadInputError', done => {
          service.placeOrder(cartId, mockDaffCartPayment).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffBadInputError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(placeOrder);

          op.graphqlErrors([new GraphQLError(
            'Guest email for cart is missing.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-input'}
          )]);
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
