import { TestBed } from '@angular/core/testing';

import { CartTestingService } from './cart.testing.service';
import { CartTestingModule } from '../../testing/cart-testing.module';
import { CartFactory, MockCart } from '../../testing/factories/cart.factory';
import { STATUS } from 'angular-in-memory-web-api';

describe('Core | Cart | Testing | CartTestingService', () => {
  
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
      let qtyValue;
      
      beforeEach(() => {
        productIdValue = 'productId';
        qtyValue = 4;
        reqInfoStub = {
          id: 'addToCart',
          req: {
            body: {
              productId: productIdValue,
              qty: qtyValue
            }
          },
          utils: {
            createResponse$: (func) => {
              return func();
            }
          }
        }
        result = cartTestingService.post(reqInfoStub);
      });

      it('should add an item to the cart', () => {
        expect(result.body.items.length).toEqual(1);
      });

      it('should set productId of the cartItem to the given productId value', () => {
        expect(result.body.items[0].product_id).toEqual(productIdValue);
      });

      it('should set qty of the cartItem to the given qty value', () => {
        expect(result.body.items[0].qty).toEqual(qtyValue);
      });
    });
  });
});
