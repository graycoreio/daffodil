import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffErrorStorageService,
  DaffStorageServiceError
} from '@daffodil/core'
import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartCouponFactory
} from '@daffodil/cart/testing';

import { DaffCartCouponEffects } from './cart-coupon.effects';
import {
  DaffCartCouponApply,
  DaffCartCouponApplySuccess,
  DaffCartCouponApplyFailure,
  DaffCartCouponRemove,
  DaffCartCouponRemoveSuccess,
  DaffCartCouponRemoveFailure,
  DaffCartCouponRemoveAll,
  DaffCartCouponRemoveAllSuccess,
  DaffCartCouponRemoveAllFailure,
  DaffCartCouponList,
  DaffCartCouponListSuccess,
  DaffCartCouponListFailure,
  DaffCartStorageFailure
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartCouponServiceInterface, DaffCartCouponDriver } from '../drivers/interfaces/cart-coupon-service.interface';

describe('Daffodil | Cart | CartCouponEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartCouponEffects<DaffCart>;

  let mockCart: DaffCart;
  let mockCoupon: DaffCartCoupon;

  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let daffDriverSpy: jasmine.SpyObj<DaffCartCouponServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  const cartStorageFailureAction = new DaffCartStorageFailure('Cart Storage Failed');
  const throwStorageError = () => { throw new DaffStorageServiceError() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartCouponEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartCouponDriver,
          useValue: jasmine.createSpyObj('DaffCartCouponDriver', ['apply', 'list', 'remove', 'removeAll'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.get(DaffCartCouponEffects);
    daffDriverSpy = TestBed.get(DaffCartCouponDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);
    cartFactory = TestBed.get(DaffCartFactory);
    cartCouponFactory = TestBed.get(DaffCartCouponFactory);

    mockCart = cartFactory.create();
    mockCoupon = cartCouponFactory.create();

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartCouponApplyAction is triggered', () => {
    let expected;
    const cartCouponApplyAction = new DaffCartCouponApply(mockCoupon);

    describe('and the call to CartCouponService is successful', () => {
      beforeEach(() => {
        daffDriverSpy.apply.and.returnValue(of(mockCart));
        const cartCouponApplySuccessAction = new DaffCartCouponApplySuccess(mockCart);
        actions$ = hot('--a', { a: cartCouponApplyAction });
        expected = cold('--b', { b: cartCouponApplySuccessAction });
      });

      it('should dispatch a CartCouponApplySuccess action', () => {
        expect(effects.apply$).toBeObservable(expected);
      });
    });

    describe('and the call to CartCouponService fails', () => {
      beforeEach(() => {
        const error = 'Failed to apply coupon to cart';
        const response = cold('#', {}, error);
        daffDriverSpy.apply.and.returnValue(response);
        const cartCouponApplyFailureAction = new DaffCartCouponApplyFailure(error);
        actions$ = hot('--a', { a: cartCouponApplyAction });
        expected = cold('--b', { b: cartCouponApplyFailureAction });
      });

      it('should dispatch a CartCouponApplyFailure action', () => {
        expect(effects.apply$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartCouponApplyAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.apply$).toBeObservable(expected);
      });
    });
  });

  describe('when CartCouponListAction is triggered', () => {
    let expected;
    const cartCouponListAction = new DaffCartCouponList();

    describe('and the call to CartCouponService is successful', () => {
      beforeEach(() => {
        daffDriverSpy.list.and.returnValue(of([mockCoupon]));
        const cartCouponListSuccessAction = new DaffCartCouponListSuccess([mockCoupon]);
        actions$ = hot('--a', { a: cartCouponListAction });
        expected = cold('--b', { b: cartCouponListSuccessAction });
      });

      it('should dispatch a CartCouponListSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to CartCouponService fails', () => {
      beforeEach(() => {
        const error = 'Failed to list coupons';
        const response = cold('#', {}, error);
        daffDriverSpy.list.and.returnValue(response);
        const cartCouponListFailureAction = new DaffCartCouponListFailure(error);
        actions$ = hot('--a', { a: cartCouponListAction });
        expected = cold('--b', { b: cartCouponListFailureAction });
      });

      it('should dispatch a CartCouponListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartCouponListAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });

  describe('when CartCouponRemoveAction is triggered', () => {
    let expected;
    const cartCouponRemoveAction = new DaffCartCouponRemove(mockCoupon);

    describe('and the call to CartCouponService is successful', () => {
      beforeEach(() => {
        daffDriverSpy.remove.and.returnValue(of(mockCart));
        const cartCouponRemoveSuccessAction = new DaffCartCouponRemoveSuccess(mockCart);
        actions$ = hot('--a', { a: cartCouponRemoveAction });
        expected = cold('--b', { b: cartCouponRemoveSuccessAction });
      });

      it('should dispatch a CartCouponApplySuccess action', () => {
        expect(effects.remove$).toBeObservable(expected);
      });
    });

    describe('and the call to CartCouponService fails', () => {
      beforeEach(() => {
        const error = 'Failed to remove a coupon from the cart';
        const response = cold('#', {}, error);
        daffDriverSpy.remove.and.returnValue(response);
        const cartCouponRemoveFailureAction = new DaffCartCouponRemoveFailure(error);
        actions$ = hot('--a', { a: cartCouponRemoveAction });
        expected = cold('--b', { b: cartCouponRemoveFailureAction });
      });

      it('should dispatch a CartCouponApplyFailure action', () => {
        expect(effects.remove$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartCouponRemoveAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.remove$).toBeObservable(expected);
      });
    });
  });

  describe('when CartCouponRemoveAllAction is triggered', () => {
    let expected;
    const cartCouponRemoveAllAction = new DaffCartCouponRemoveAll();

    describe('and the clear call to driver is successful', () => {
      beforeEach(() => {
        daffDriverSpy.removeAll.and.returnValue(of(mockCart));
        const cartCouponRemoveAllSuccessAction = new DaffCartCouponRemoveAllSuccess(mockCart);
        actions$ = hot('--a', { a: cartCouponRemoveAllAction });
        expected = cold('--b', { b: cartCouponRemoveAllSuccessAction });
      });

      it('should return a DaffCartCouponRemoveAllSucess action', () => {
        expect(effects.removeAll$).toBeObservable(expected);
      });
    });

    describe('and the call to CartCouponService fails', () => {
      beforeEach(() => {
        const error = 'Failed to remove all coupons from the cart';
        const response = cold('#', {}, error);
        daffDriverSpy.removeAll.and.returnValue(response);
        const cartCouponRemoveAllFailureAction = new DaffCartCouponRemoveAllFailure(error);
        actions$ = hot('--a', { a: cartCouponRemoveAllAction });
        expected = cold('--b', { b: cartCouponRemoveAllFailureAction });
      });

      it('should return a DaffCartCouponRemoveAllFailure action', () => {
        expect(effects.removeAll$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartCouponRemoveAllAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.removeAll$).toBeObservable(expected);
      });
    });
  });
});
