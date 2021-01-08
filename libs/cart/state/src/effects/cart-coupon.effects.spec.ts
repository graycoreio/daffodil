import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffStorageServiceError
} from '@daffodil/core'
import { DaffStateError, daffTransformErrorToStateError } from '@daffodil/core/state';
import {
  DaffCart,
  DaffCartCoupon,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DaffCartCouponServiceInterface, DaffCartCouponDriver } from '@daffodil/cart/driver';
import { DaffCartStorageFailure, DaffCartCouponApply, DaffCartCouponApplySuccess, DaffCartCouponApplyFailure, DaffCartCouponList, DaffCartCouponListSuccess, DaffCartCouponListFailure, DaffCartCouponRemove, DaffCartCouponRemoveSuccess, DaffCartCouponRemoveFailure, DaffCartCouponRemoveAll, DaffCartCouponRemoveAllSuccess, DaffCartCouponRemoveAllFailure } from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartCouponFactory
} from '@daffodil/cart/testing';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';

import { DaffCartCouponEffects } from './cart-coupon.effects';

describe('Daffodil | Cart | CartCouponEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartCouponEffects<DaffCart>;

  let mockCart: DaffCart;
  let mockCoupon: DaffCartCoupon;

  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let daffDriver: DaffCartCouponServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverApplySpy: jasmine.Spy;
  let driverListSpy: jasmine.Spy;
  let driverRemoveSpy: jasmine.Spy;
  let driverRemoveAllSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;

  const cartStorageFailureAction = new DaffCartStorageFailure(daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.')));
  const throwStorageError = () => { throw new DaffStorageServiceError('An error occurred during storage.') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot()
      ],
      providers: [
        DaffCartCouponEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject(DaffCartCouponEffects);
    daffDriver = TestBed.inject(DaffCartCouponDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartCouponFactory = TestBed.inject(DaffCartCouponFactory);

    mockCart = cartFactory.create();
    mockCoupon = cartCouponFactory.create();

    driverApplySpy = spyOn(daffDriver, 'apply');
    driverListSpy = spyOn(daffDriver, 'list');
    driverRemoveSpy = spyOn(daffDriver, 'remove');
    driverRemoveAllSpy = spyOn(daffDriver, 'removeAll');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartCouponApplyAction is triggered', () => {
    let expected;
    const cartCouponApplyAction = new DaffCartCouponApply(mockCoupon);

    describe('and the call to CartCouponService is successful', () => {
      beforeEach(() => {
        driverApplySpy.and.returnValue(of(mockCart));
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
        const error: DaffStateError = {code: 'code', message: 'Failed to apply coupon to cart'};
        const response = cold('#', {}, error);
        driverApplySpy.and.returnValue(response);
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
        getCartIdSpy.and.callFake(throwStorageError)

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
        driverListSpy.and.returnValue(of([mockCoupon]));
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
        const error: DaffStateError = {code: 'code', message: 'Failed to list coupons'};
        const response = cold('#', {}, error);
        driverListSpy.and.returnValue(response);
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
        getCartIdSpy.and.callFake(throwStorageError)

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
        driverRemoveSpy.and.returnValue(of(mockCart));
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
        const error: DaffStateError = {code: 'code', message: 'Failed to remove a coupon from the cart'};
        const response = cold('#', {}, error);
        driverRemoveSpy.and.returnValue(response);
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
        getCartIdSpy.and.callFake(throwStorageError)

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
        driverRemoveAllSpy.and.returnValue(of(mockCart));
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
        const error: DaffStateError = {code: 'code', message: 'Failed to remove all coupons from the cart'};
        const response = cold('#', {}, error);
        driverRemoveAllSpy.and.returnValue(response);
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
        getCartIdSpy.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartCouponRemoveAllAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.removeAll$).toBeObservable(expected);
      });
    });
  });
});
