import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import { CartFactory } from '@daffodil/core';

import { CartTestingService } from './cart.testing.service';
import { CartTestingModule } from '../../testing/cart-testing.module';

describe('State | Cart | Testing | CartTestingService', () => {
  
  let cartTestingService;
  let cartFactory: CartFactory = new CartFactory();
  let mockCart = cartFactory.create();

  beforeEach(() => {
    spyOn(cartFactory, 'create').and.returnValue(mockCart);

    TestBed.configureTestingModule({
      imports: [
        CartTestingModule
      ],
      providers: [
        CartTestingService,
        {provide: CartFactory, useValue: cartFactory}
      ]
    });

    cartTestingService = TestBed.get(CartTestingService);
  });

  it('should be created', () => {
    expect(cartTestingService).toBeTruthy();
  });

  describe('constructor', () => {

    it('should call cartFactory.create', () => {
      expect(cartFactory.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('createDb', () => {

    let result;

    beforeEach(() => {
      result = cartTestingService.createDb();
    });
    
    it('should return a cart', () => {
      expect(result.cart).toEqual(mockCart);
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
          createResponse$: (func) => {
            return func();
          }
        }
      }
      result = cartTestingService.post(reqInfoStub);
    });
    
    it('should return the returned value from createResponse$', () => {
      expect(result).toEqual({
        body: mockCart,
        status: STATUS.OK
      });
    });
    
    describe('when reqInfo.id is addToCart', () => {

      let productIdValue;

      beforeEach(() => {
        reqInfoStub = {
          id: 'addToCart',
          req: {
            body: {
              productId: 'replaceme',
              qty: 4
            }
          },
          utils: {
            createResponse$: (func) => {
              return func();
            }
          }
        }
      });

      describe('and product is unique', () => {

        it('should add an item to the cart', () => {
          reqInfoStub.req.body.productId = "addToCartTest";
          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items.length).toEqual(1);
        });

        it('should set qty of the cartItem to the given qty value', () => {
          reqInfoStub.req.body.productId = 'qtyTest';
          reqInfoStub.req.body.qty = 2;
          
          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[1].qty).toEqual(2);
        });

        it('should set productId of the cartItem to the given productId value', () => {
          productIdValue = 'productIdTest';
          reqInfoStub.req.body.productId = productIdValue;

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[2].product_id).toEqual(productIdValue);
        });
      });

      describe('and product is not unique', () => {
        
        it('should add given qty to existing product', () => {
          reqInfoStub.req.body.productId = 'qtyTest';
          reqInfoStub.req.body.qty = 2;
          
          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[1].qty).toEqual(4);
        });
      });
    });
  });
});
