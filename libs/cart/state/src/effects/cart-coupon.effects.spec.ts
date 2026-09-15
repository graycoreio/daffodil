import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartCoupon,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartCouponServiceInterface,
  DaffCartCouponDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartStorageFailure,
  DaffCartCouponApply,
  DaffCartCouponApplySuccess,
  DaffCartCouponApplyFailure,
  DaffCartCouponList,
  DaffCartCouponListSuccess,
  DaffCartCouponListFailure,
  DaffCartCouponRemove,
  DaffCartCouponRemoveSuccess,
  DaffCartCouponRemoveFailure,
  DaffCartCouponRemoveAll,
  DaffCartCouponRemoveAllSuccess,
  DaffCartCouponRemoveAllFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartCouponFactory,
} from '@daffodil/cart/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import {
  DaffStateError,
  daffTransformErrorToStateError,
} from '@daffodil/core/state';

import { DaffCartCouponEffects } from './cart-coupon.effects';

describe('@daffodil/cart/state | DaffCartCouponEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartCouponEffects<DaffCart>;

  let mockCart: DaffCart;
  let mockCoupon: DaffCartCoupon;

  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let daffDriver: DaffCartCouponServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverApplySpy: jasmine.Spy<DaffCartCouponServiceInterface['apply']>;
  let driverListSpy: jasmine.Spy<DaffCartCouponServiceInterface['list']>;
  let driverRemoveSpy: jasmine.Spy<DaffCartCouponServiceInterface['remove']>;
  let driverRemoveAllSpy: jasmine.Spy<DaffCartCouponServiceInterface['removeAll']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  const cartStorageFailureAction = new DaffCartStorageFailure([daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.'))]);
  const throwStorageError = () => {
    throw new DaffStorageServiceError('An error occurred during storage.');
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartCouponEffects,
        provideMockActions(() => actions$),
      ],
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
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartCouponApplyAction is triggered', () => {
    const cartCouponApplyAction = new DaffCartCouponApply(mockCoupon);

    describe('and the call to CartCouponService is successful', () => {
      it('should dispatch a CartCouponApplySuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverApplySpy.and.returnValue(of(mockCart));
          const cartCouponApplySuccessAction = new DaffCartCouponApplySuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartCouponApplyAction });
          helpers.expectObservable(effects.apply$).toBe('--b', { b: cartCouponApplySuccessAction });
        });
      });
    });

    describe('and the call to CartCouponService fails', () => {
      it('should dispatch a CartCouponApplyFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to apply coupon to cart' };
          const response = helpers.cold<any>('#', {}, error);
          driverApplySpy.and.returnValue(response);
          const cartCouponApplyFailureAction = new DaffCartCouponApplyFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCouponApplyAction });
          helpers.expectObservable(effects.apply$).toBe('--b', { b: cartCouponApplyFailureAction });
        });
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        getCartIdSpy.and.callFake(throwStorageError);
      });

      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartCouponApplyAction });
          helpers.expectObservable(effects.apply$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });
  });

  describe('when CartCouponListAction is triggered', () => {
    const cartCouponListAction = new DaffCartCouponList();

    describe('and the call to CartCouponService is successful', () => {
      it('should dispatch a CartCouponListSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverListSpy.and.returnValue(of([mockCoupon]));
          const cartCouponListSuccessAction = new DaffCartCouponListSuccess([mockCoupon]);
          actions$ = helpers.hot('--a', { a: cartCouponListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartCouponListSuccessAction });
        });
      });
    });

    describe('and the call to CartCouponService fails', () => {
      it('should dispatch a CartCouponListFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to list coupons' };
          const response = helpers.cold<any>('#', {}, error);
          driverListSpy.and.returnValue(response);
          const cartCouponListFailureAction = new DaffCartCouponListFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCouponListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartCouponListFailureAction });
        });
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        getCartIdSpy.and.callFake(throwStorageError);
      });

      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartCouponListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });
  });

  describe('when CartCouponRemoveAction is triggered', () => {
    const cartCouponRemoveAction = new DaffCartCouponRemove(mockCoupon);

    describe('and the call to CartCouponService is successful', () => {
      it('should dispatch a CartCouponApplySuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverRemoveSpy.and.returnValue(of(mockCart));
          const cartCouponRemoveSuccessAction = new DaffCartCouponRemoveSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartCouponRemoveAction });
          helpers.expectObservable(effects.remove$).toBe('--b', { b: cartCouponRemoveSuccessAction });
        });
      });
    });

    describe('and the call to CartCouponService fails', () => {
      it('should dispatch a CartCouponApplyFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to remove a coupon from the cart' };
          const response = helpers.cold<any>('#', {}, error);
          driverRemoveSpy.and.returnValue(response);
          const cartCouponRemoveFailureAction = new DaffCartCouponRemoveFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCouponRemoveAction });
          helpers.expectObservable(effects.remove$).toBe('--b', { b: cartCouponRemoveFailureAction });
        });
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        getCartIdSpy.and.callFake(throwStorageError);
      });

      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartCouponRemoveAction });
          helpers.expectObservable(effects.remove$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });
  });

  describe('when CartCouponRemoveAllAction is triggered', () => {
    const cartCouponRemoveAllAction = new DaffCartCouponRemoveAll();

    describe('and the clear call to driver is successful', () => {
      it('should return a DaffCartCouponRemoveAllSucess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverRemoveAllSpy.and.returnValue(of(mockCart));
          const cartCouponRemoveAllSuccessAction = new DaffCartCouponRemoveAllSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartCouponRemoveAllAction });
          helpers.expectObservable(effects.removeAll$).toBe('--b', { b: cartCouponRemoveAllSuccessAction });
        });
      });
    });

    describe('and the call to CartCouponService fails', () => {
      it('should return a DaffCartCouponRemoveAllFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to remove all coupons from the cart' };
          const response = helpers.cold<any>('#', {}, error);
          driverRemoveAllSpy.and.returnValue(response);
          const cartCouponRemoveAllFailureAction = new DaffCartCouponRemoveAllFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCouponRemoveAllAction });
          helpers.expectObservable(effects.removeAll$).toBe('--b', { b: cartCouponRemoveAllFailureAction });
        });
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        getCartIdSpy.and.callFake(throwStorageError);
      });

      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartCouponRemoveAllAction });
          helpers.expectObservable(effects.removeAll$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });
  });
});
