import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartAddress,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingAddressServiceInterface,
  DaffCartShippingAddressDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartShippingAddressLoad,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartShippingAddressEffects } from './cart-shipping-address.effects';

describe('@daffodil/cart/state | DaffCartShippingAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartShippingAddressEffects;

  let mockCart: DaffCart;
  let mockCartShippingAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffShippingAddressDriver: DaffCartShippingAddressServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy<DaffCartShippingAddressServiceInterface['get']>;
  let driverUpdateSpy: jasmine.Spy<DaffCartShippingAddressServiceInterface['update']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartShippingAddressEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartShippingAddressEffects);

    daffShippingAddressDriver = TestBed.inject(DaffCartShippingAddressDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartShippingAddress = cartAddressFactory.create();

    driverGetSpy = spyOn(daffShippingAddressDriver, 'get');
    driverUpdateSpy = spyOn(daffShippingAddressDriver, 'update');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartShippingAddressLoadAction is triggered', () => {
    const cartShippingAddressLoadAction = new DaffCartShippingAddressLoad();

    describe('and the call to CartShippingAddressService is successful', () => {
      it('should dispatch a CartShippingAddressLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of(mockCartShippingAddress));
          const cartShippingAddressLoadSuccessAction = new DaffCartShippingAddressLoadSuccess(mockCartShippingAddress);
          actions$ = helpers.hot('--a', { a: cartShippingAddressLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartShippingAddressLoadSuccessAction });
        });
      });
    });

    describe('and the call to CartShippingAddressService fails', () => {
      it('should dispatch a CartShippingAddressLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart shipping address' };
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const cartShippingAddressLoadFailureAction = new DaffCartShippingAddressLoadFailure([error]);
          actions$ = helpers.hot('--a', { a: cartShippingAddressLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartShippingAddressLoadFailureAction });
        });
      });
    });
  });

  describe('when CartShippingAddressUpdateAction is triggered', () => {
    let cartCreateAction;
    const street = 'updatedStreet';

    beforeEach(() => {
      mockCartShippingAddress.street = street;
      cartCreateAction = new DaffCartShippingAddressUpdate(mockCartShippingAddress);
    });

    describe('and the call to CartShippingAddressService is successful', () => {
      it('should dispatch a CartShippingAddressUpdateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverUpdateSpy.and.returnValue(of(mockCart));
          const cartCreateSuccessAction = new DaffCartShippingAddressUpdateSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartCreateSuccessAction });
        });
      });
    });

    describe('and the call to CartShippingAddressService fails', () => {
      it('should dispatch a CartShippingAddressUpdateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart shipping address' };
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const cartCreateFailureAction = new DaffCartShippingAddressUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartCreateFailureAction });
        });
      });
    });
  });
});
