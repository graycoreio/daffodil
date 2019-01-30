import { TestBed } from '@angular/core/testing';
import { DaffTestingCartService } from './cart.service';
import { DaffCartFactory, DaffCoreTestingModule } from '@daffodil/core/testing';
import { Cart } from '@daffodil/core';

describe('Driver | Testing | Cart | CartService', () => {
  let testingCartService: DaffTestingCartService;
  const cartFactorySpy = jasmine.createSpyObj('DaffCartFactory', ['create']);

  let stubCart: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule
      ],
      providers: [
        DaffTestingCartService,
        {provide: DaffCartFactory, useValue: cartFactorySpy}
      ]
    });

    stubCart = new DaffCartFactory().create();
    cartFactorySpy.create.and.returnValue(stubCart);

    testingCartService = TestBed.get(DaffTestingCartService);
  });

  it('should be created', () => {
    expect(testingCartService).toBeTruthy();
  });

  describe('get | getting a cart', () => {
    it('should return a cart from cart factory', () => {
      testingCartService.get().subscribe(cart => {
        expect(cart).toEqual(stubCart);
      });
    });
  });

  describe('addToCart', () => {
    let productId;
    let qty;

    beforeEach(() => {
      productId = 'productId';
      qty = 1;
    });

    it('should return a cart from cart factory', () => {
      testingCartService.addToCart(productId, qty).subscribe(cart => {
        expect(cart).toEqual(stubCart);
      });
    });
  });
});
