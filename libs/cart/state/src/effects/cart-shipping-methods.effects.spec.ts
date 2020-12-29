import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartShippingRate,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingMethodsLoad,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartShippingMethodsLoadFailure
} from '@daffodil/cart/state';
import { DaffCartShippingMethodsServiceInterface, DaffCartShippingMethodsDriver } from '@daffodil/cart/driver';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartShippingMethodsEffects } from './cart-shipping-methods.effects';

describe('Daffodil | Cart | DaffCartShippingMethodsEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartShippingMethodsEffects<DaffCartShippingRate>;

  let mockCart: DaffCart;
  let mockCartShippingRate: DaffCartShippingRate;

  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  let shippingMethodsDriverSpy: jasmine.SpyObj<DaffCartShippingMethodsServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartShippingMethodsEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartShippingMethodsDriver,
          useValue: jasmine.createSpyObj('DaffCartShippingMethodsDriver', ['list'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.inject<DaffCartShippingMethodsEffects<DaffCartShippingRate>>(DaffCartShippingMethodsEffects);

    shippingMethodsDriverSpy = TestBed.inject<DaffCartShippingMethodsServiceInterface>(DaffCartShippingMethodsDriver);
    daffCartStorageSpy = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject<DaffCartFactory>(DaffCartFactory);
    cartShippingRateFactory = TestBed.inject<DaffCartShippingRateFactory>(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingRate = cartShippingRateFactory.create();

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartShippingMethodsLoadAction is triggered', () => {
    let expected;
    const cartCreateAction = new DaffCartShippingMethodsLoad();

    describe('and the call to CartService is successful', () => {
      beforeEach(() => {
        shippingMethodsDriverSpy.list.and.returnValue(of([mockCartShippingRate]));
        const cartCreateSuccessAction = new DaffCartShippingMethodsLoadSuccess([mockCartShippingRate]);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateSuccessAction });
      });

      it('should dispatch a CartShippingMethodsLoadSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to list cart shipping methods'};
        const response = cold('#', {}, error);
        shippingMethodsDriverSpy.list.and.returnValue(response);
        const cartCreateFailureAction = new DaffCartShippingMethodsLoadFailure(error);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateFailureAction });
      });

      it('should dispatch a CartShippingMethodsLoadFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});
