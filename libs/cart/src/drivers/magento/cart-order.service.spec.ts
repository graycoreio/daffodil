import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { catchError } from 'rxjs/operators';
import { GraphQLError } from 'graphql';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartFactory,
} from '@daffodil/cart/testing';

import { DaffMagentoCartOrderService } from './cart-order.service';
import { MagentoPlaceOrderResponse } from './models/responses/place-order';
import { placeOrder } from './queries/public_api';
import { DaffCartNotFoundError, DaffBadInputError } from '../../errors/public_api';

describe('Driver | Magento | Cart | CartOrderService', () => {
  let service: DaffMagentoCartOrderService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;

  let cartId;
  let orderNumber;
  let mockDaffCart: DaffCart;
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

    service = TestBed.get(DaffMagentoCartOrderService);
    controller = TestBed.get(ApolloTestingController);

    daffCartFactory = TestBed.get(DaffCartFactory);

    mockDaffCart = daffCartFactory.create();

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
      it('should return the order ID', done => {
        service.placeOrder(cartId).subscribe(result => {
          expect(String(result.id)).toEqual(String(orderNumber));
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
          service.placeOrder(cartId).pipe(
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
          service.placeOrder(cartId).pipe(
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
