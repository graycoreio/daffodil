import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartShippingRate,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingMethodsServiceInterface,
  DaffCartShippingMethodsDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartShippingMethodsLoad,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartShippingMethodsLoadFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartShippingMethodsEffects } from './cart-shipping-methods.effects';

describe('@daffodil/cart/state | DaffCartShippingMethodsEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartShippingMethodsEffects<DaffCartShippingRate>;

  let mockCart: DaffCart;
  let mockCartShippingRate: DaffCartShippingRate;

  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  let shippingMethodsDriver: DaffCartShippingMethodsServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverListSpy: jasmine.Spy<DaffCartShippingMethodsServiceInterface['list']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartShippingMethodsEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartShippingMethodsEffects);

    shippingMethodsDriver = TestBed.inject(DaffCartShippingMethodsDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartShippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingRate = cartShippingRateFactory.create();

    driverListSpy = spyOn(shippingMethodsDriver, 'list');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartShippingMethodsLoadAction is triggered', () => {
    const cartCreateAction = new DaffCartShippingMethodsLoad();

    describe('and the call to CartService is successful', () => {
      it('should dispatch a CartShippingMethodsLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverListSpy.and.returnValue(of([mockCartShippingRate]));
          const cartCreateSuccessAction = new DaffCartShippingMethodsLoadSuccess([mockCartShippingRate]);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartCreateSuccessAction });
        });
      });
    });

    describe('and the call to CartService fails', () => {
      it('should dispatch a CartShippingMethodsLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to list cart shipping methods' };
          const response = helpers.cold<any>('#', {}, error);
          driverListSpy.and.returnValue(response);
          const cartCreateFailureAction = new DaffCartShippingMethodsLoadFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartCreateFailureAction });
        });
      });
    });
  });
});
