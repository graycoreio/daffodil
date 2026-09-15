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
  DaffCartBillingAddressServiceInterface,
  DaffCartBillingAddressDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartBillingAddressLoad,
  DaffCartBillingAddressLoadSuccess,
  DaffCartBillingAddressLoadFailure,
  DaffCartBillingAddressUpdate,
  DaffCartBillingAddressUpdateSuccess,
  DaffCartBillingAddressUpdateFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartBillingAddressEffects } from './cart-billing-address.effects';

describe('@daffodil/cart/state | DaffCartBillingAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartBillingAddressEffects;

  let mockCart: DaffCart;
  let mockCartBillingAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffBillingAddressDriver: DaffCartBillingAddressServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy<DaffCartBillingAddressServiceInterface['get']>;
  let driverUpdateSpy: jasmine.Spy<DaffCartBillingAddressServiceInterface['update']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartBillingAddressEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartBillingAddressEffects);

    daffBillingAddressDriver = TestBed.inject(DaffCartBillingAddressDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartBillingAddress = cartAddressFactory.create();

    driverGetSpy = spyOn(daffBillingAddressDriver, 'get');
    driverUpdateSpy = spyOn(daffBillingAddressDriver, 'update');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartBillingAddressLoadAction is triggered', () => {
    const cartBillingAddressLoadAction = new DaffCartBillingAddressLoad();

    describe('and the call to CartBillingAddressService is successful', () => {
      it('should dispatch a CartBillingAddressLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of(mockCartBillingAddress));
          const cartBillingAddressLoadSuccessAction = new DaffCartBillingAddressLoadSuccess(mockCartBillingAddress);
          actions$ = helpers.hot('--a', { a: cartBillingAddressLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartBillingAddressLoadSuccessAction });
        });
      });
    });

    describe('and the call to CartBillingAddressService fails', () => {
      it('should dispatch a CartBillingAddressLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart billing address' };
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const cartBillingAddressLoadFailureAction = new DaffCartBillingAddressLoadFailure([error]);
          actions$ = helpers.hot('--a', { a: cartBillingAddressLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartBillingAddressLoadFailureAction });
        });
      });
    });
  });

  describe('when CartBillingAddressUpdateAction is triggered', () => {
    let cartCreateAction;
    const street = 'updatedStreet';

    beforeEach(() => {
      mockCartBillingAddress.street = street;
      cartCreateAction = new DaffCartBillingAddressUpdate(mockCartBillingAddress);
    });

    describe('and the call to CartBillingAddressService is successful', () => {
      it('should dispatch a CartBillingAddressUpdateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverUpdateSpy.and.returnValue(of(mockCart));
          const cartCreateSuccessAction = new DaffCartBillingAddressUpdateSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartCreateSuccessAction });
        });
      });
    });

    describe('and the call to CartBillingAddressService fails', () => {
      it('should dispatch a CartBillingAddressUpdateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart billing address' };
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const cartCreateFailureAction = new DaffCartBillingAddressUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartCreateFailureAction });
        });
      });
    });
  });
});
