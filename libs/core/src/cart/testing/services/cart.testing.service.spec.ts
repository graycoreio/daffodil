import { TestBed, inject } from '@angular/core/testing';

import { CartTestingService } from './cart.testing.service';
import { Cart } from '../../model/cart';
import { CartTestingModule } from '../../testing/cart-testing.module';
import { CartFactory, MockCart } from '../../testing/factories/cart.factory';
import { STATUS } from 'angular-in-memory-web-api';

describe('Core | Cart | Testing | CartTestingService', () => {
  
  let cartTestingService;
  let cartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CartTestingModule
      ],
      providers: [CartTestingService]
    });

    cartFactory = TestBed.get(CartFactory);
    cartTestingService = TestBed.get(CartTestingService);

  });

  it('should be created', () => {
    expect(cartTestingService).toBeTruthy();
  });

  describe('createDb', () => {

    let result;
    let mockCart;

    beforeEach(() => {
      mockCart = cartFactory.create();
      spyOn(cartFactory, 'create').and.returnValue(mockCart);
      result = cartTestingService.createDb();
    });
    
    it('should return a cart', () => {
      expect(result.cart).toEqual(mockCart);
    });

    it('should call cartFactory.create', () => {
      expect(cartFactory.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('post', () => {

    let reqInfoStub;
    let cartResult;
    let result;

    beforeEach(() => {
      cartResult = 'cart';
      spyOn(cartFactory, 'addCartItemToCart').and.returnValue(cartResult);

      reqInfoStub = {
        req: {
          body: 'body'
        },
        utils: {
          createResponse$: (func) => {
            return func();
          }
        }
      }
      result = cartTestingService.post(reqInfoStub);
    });
    
    it('should return the returned value from createResponse$', () => {
      expect(result).toEqual({
        body: cartResult,
        status: STATUS.OK
      });
    });

    it('should call cartFactory.addCartItemToCart', () => {
      expect(cartFactory.addCartItemToCart).toHaveBeenCalledWith(reqInfoStub.req.body);
    });
  });
});
