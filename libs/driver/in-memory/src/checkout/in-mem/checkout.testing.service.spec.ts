import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import { DaffInMemoryCheckoutTestingService } from './checkout.testing.service';

describe('Driver | Checkout | In Memory | CheckoutTestingService', () => {
  let checkoutTestingService: DaffInMemoryCheckoutTestingService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DaffDriverTestingModule
      ],
      providers: [
        DaffInMemoryCheckoutTestingService
      ]
    });

    checkoutTestingService = TestBed.get(DaffInMemoryCheckoutTestingService);
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
          body: 'body'
        },
        utils: {
          createResponse$: func => {
            return func();
          }
        }
      };
      result = checkoutTestingService.post(reqInfoStub);
    });

    describe('when reqInfo.id is placeOrder', () => {

      beforeEach(() => {
        reqInfoStub = {
          id: 'placeOrder',
          req: {
            body: {
              cartId: 'cartId'
            }
          },
          utils: {
            createResponse$: func => {
              return func();
            }
          }
        };
      });
      
      it('should return an order with two order items', () => {
        result = checkoutTestingService.post(reqInfoStub);
        expect(result.body.items.length).toEqual(2);
      });
    });
  });
});
