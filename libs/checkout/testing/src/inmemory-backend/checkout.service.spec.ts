import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendCheckoutService } from './checkout.service';

describe('Driver | Checkout | In Memory | CheckoutTestingService', () => {
  let checkoutTestingService: DaffInMemoryBackendCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffInMemoryBackendCheckoutService,
      ],
    });

    checkoutTestingService = TestBed.inject(DaffInMemoryBackendCheckoutService);
  });

  it('should be created', () => {
    expect(checkoutTestingService).toBeTruthy();
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = checkoutTestingService.createDb();
    });

    it('should return a null Order', () => {
      result = checkoutTestingService.createDb();
      expect(result.order).toBeNull();
    });
  });

  describe('post', () => {
    let reqInfoStub;
    let result;

    beforeEach(() => {
      reqInfoStub = {
        req: {
          body: 'body',
        },
        utils: {
          createResponse$: func => func(),
        },
      };
      result = checkoutTestingService.post(reqInfoStub);
    });

    describe('when reqInfo.id is placeOrder', () => {

      beforeEach(() => {
        reqInfoStub = {
          id: 'placeOrder',
          req: {
            body: {
              cartId: 'cartId',
            },
          },
          utils: {
            createResponse$: func => func(),
          },
        };
      });

      it('should return an order with two order items', () => {
        result = checkoutTestingService.post(reqInfoStub);
        expect(result.body.items.length).toEqual(2);
      });
    });
  });
});
