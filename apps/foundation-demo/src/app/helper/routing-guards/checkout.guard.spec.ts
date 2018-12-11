import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { 
  Cart, 
  DaffCartFactory, 
  DaffCartItemFactory,
  fromCart, 
  DaffDriverTestingModule 
} from '@daffodil/cart';

import { CheckoutGuard } from './checkout.guard';
import { CartLoadGuard } from './cart-load.guard';

xdescribe('Checkout Guard', () => {
  let checkoutGuardService: CheckoutGuard;
  let router: Router;
  let result: Observable<boolean>;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let cartLoadGuard: CartLoadGuard;
  let stubCart: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffDriverTestingModule,
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
        })
      ],
      providers: [
        CheckoutGuard,
        CartLoadGuard
      ]
    });

    checkoutGuardService = TestBed.get(CheckoutGuard);
    router = TestBed.get(Router);
    cartLoadGuard = TestBed.get(CartLoadGuard);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();

    spyOn(router, 'navigateByUrl');
    spyOn(cartLoadGuard, 'canActivate').and.returnValue(of(false));
  });

  it('should be created', () => {
    expect(checkoutGuardService).toBeTruthy();
  });

  describe('canActivate', () => {
    describe('when cart is empty', () => {

      beforeEach(() => {
        result = checkoutGuardService.canActivate();
      });
      
      it('should call router.navigateByUrl', () => {
        result.subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
        });
      });

      it('should return false', () => {
        result.subscribe((bool) => {
          expect(bool).toBeFalsy();
        });
      });
    });

    describe('when cart is not empty', () => {

      beforeEach(() => {
        stubCart.items = cartItemFactory.createMany(2);

        result = checkoutGuardService.canActivate();
      });
      
      it('should not call router.navigateByUrl', () => {
        expect(router.navigateByUrl).not.toHaveBeenCalled();
      });

      it('should return true', () => {
        result.subscribe((bool) => {
          expect(bool).toBeTruthy();
        });
      });
    });
  });
});
