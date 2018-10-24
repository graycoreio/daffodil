import { TestBed } from '@angular/core/testing';

import { DaffInMemoryCartTestingService } from './cart.testing.service';
import { DaffCoreTestingModule, CartFactory } from '@daffodil/core/testing';

describe('Driver | Cart | In Memory | CartTestingService', () => {
  let cartTestingService: DaffInMemoryCartTestingService;
  let cartFactory: CartFactory;
  let mockCart;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule
      ],
      providers: [
        DaffInMemoryCartTestingService
      ]
    });

    cartTestingService = TestBed.get(DaffInMemoryCartTestingService);
    cartFactory = TestBed.get(CartFactory);

    mockCart = cartFactory.create();
    spyOn(cartFactory, 'create').and.returnValue(mockCart);
  });

  it('should be created', () => {
    expect(cartTestingService).toBeTruthy();
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = cartTestingService.createDb();
    });

    it('should return an Object', () => {
      expect(result.cart).toEqual(jasmine.any(Object));
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
      result = cartTestingService.post(reqInfoStub);
    });

    it('should return an object', () => {
      expect(result).toEqual(jasmine.any(Object));
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
            createResponse$: func => {
              return func();
            }
          }
        };
      });

      describe('and product is unique', () => {
        it('should add an item to the cart', () => {
          reqInfoStub.req.body.productId = 'addToCartTest';
          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items.length).toEqual(1);
        });

        it('should set qty of the cartItem to the given qty value', () => {
          reqInfoStub.req.body.productId = 'qtyTest';
          reqInfoStub.req.body.qty = 2;

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[0].qty).toEqual(2);
        });

        it('should set productId of the cartItem to the given productId value', () => {
          productIdValue = 'productIdTest';
          reqInfoStub.req.body.productId = productIdValue;

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[0].product_id).toEqual(productIdValue);
        });
      });

      describe('and product is not unique', () => {
        it('should add given qty to existing product', () => {
          reqInfoStub.req.body.productId = 'qtyTest';
          reqInfoStub.req.body.qty = 2;

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[0].qty).toEqual(2);

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[0].qty).toEqual(4);
        });
      });
    });
  });
});
