import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { of } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartDriverErrorCodes } from '@daffodil/cart/driver';
import { DaffCheckoutInvalidAPIResponseError } from '@daffodil/checkout/driver';
import {
  MagentoPlaceOrderResponse,
  magentoCheckoutPlaceOrderQuery,
} from '@daffodil/checkout/driver/magento/2.4.7';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { DaffOrder } from '@daffodil/order';

import { MagentoCheckoutOrderService } from './driver.service';
import { MagentoCheckoutPlaceOrderGraphQlErrorCode } from './graphql/error/codes';

describe('@daffodil/checkout/driver/magento/2.4.7 | MagentoCheckoutOrderService', () => {
  let service: MagentoCheckoutOrderService;
  let controller: ApolloTestingController;

  let cartId: DaffCart['id'];
  let orderNumber: DaffOrder['id'];
  let mockPlaceOrderResponse: MagentoPlaceOrderResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        MagentoCheckoutOrderService,
      ],
    });

    service = TestBed.inject(MagentoCheckoutOrderService);
    controller = TestBed.inject(ApolloTestingController);

    cartId = 'cartId';
    orderNumber = '28349539482';
    mockPlaceOrderResponse = {
      placeOrder: {
        orderV2: {
          // eslint-disable-next-line id-blacklist
          number: orderNumber,
        },
        errors: [],
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('placeOrder | placing an order for the specified cart', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the order and cart ID', done => {
        service.placeOrder(cartId).subscribe(result => {
          expect(result.orderId).toEqual(orderNumber);
          expect(result.cartId).toEqual(cartId);
          done();
        });

        const op = controller.expectOne(magentoCheckoutPlaceOrderQuery);

        op.flush({
          data: mockPlaceOrderResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      describe('because of a cart not found', () => {
        beforeEach(() => {
          mockPlaceOrderResponse.placeOrder.errors.push({
            code: MagentoCheckoutPlaceOrderGraphQlErrorCode.CART_NOT_FOUND,
            message: 'Cart not found',
          });
        });

        it('should throw a DaffCartNotFoundError', done => {
          service.placeOrder(cartId).pipe(
            catchAndArrayifyErrors((errors) => {
              console.log(errors);
              expect(errors).toEqual(jasmine.arrayContaining([jasmine.objectContaining({ code: DaffCartDriverErrorCodes.CART_NOT_FOUND })]));
              done();
              return of();
            }),
          ).subscribe();

          const op = controller.expectOne(magentoCheckoutPlaceOrderQuery);

          op.flush({
            data: mockPlaceOrderResponse,
          });
        });
      });

      describe('because of an unspecified error', () => {
        beforeEach(() => {
          mockPlaceOrderResponse.placeOrder.errors.push({
            code: MagentoCheckoutPlaceOrderGraphQlErrorCode.UNDEFINED,
            message: 'blep',
          });
        });

        it('should throw a DaffCheckoutInvalidAPIResponseError', done => {
          service.placeOrder(cartId).pipe(
            catchAndArrayifyErrors((errors) => {
              expect(errors).toEqual(jasmine.arrayContaining([jasmine.any(DaffCheckoutInvalidAPIResponseError)]));
              done();
              return of();
            }),
          ).subscribe();

          const op = controller.expectOne(magentoCheckoutPlaceOrderQuery);

          op.flush({
            data: {},
          });
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
