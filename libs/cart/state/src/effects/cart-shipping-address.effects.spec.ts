import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffCart,
  DaffCartAddress,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingAddressLoad,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure
} from '@daffodil/cart/state';
import { DaffCartShippingAddressServiceInterface, DaffCartShippingAddressDriver } from '@daffodil/cart/driver';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffCartShippingAddressEffects } from './cart-shipping-address.effects';

describe('Daffodil | Cart | CartShippingAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartShippingAddressEffects<DaffCartAddress, DaffCart>;

  let mockCart: DaffCart;
  let mockCartShippingAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffShippingAddressDriverSpy: jasmine.SpyObj<DaffCartShippingAddressServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartShippingAddressEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartShippingAddressDriver,
          useValue: jasmine.createSpyObj('DaffCartShippingAddressDriver', ['get', 'update'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.inject<DaffCartShippingAddressEffects<DaffCartAddress, DaffCart>>(DaffCartShippingAddressEffects);

    daffShippingAddressDriverSpy = TestBed.inject<DaffCartShippingAddressServiceInterface>(DaffCartShippingAddressDriver);
    daffCartStorageSpy = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject<DaffCartFactory>(DaffCartFactory);
    cartAddressFactory = TestBed.inject<DaffCartAddressFactory>(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartShippingAddress = cartAddressFactory.create();

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartShippingAddressLoadAction is triggered', () => {
    let expected;
    const cartShippingAddressLoadAction = new DaffCartShippingAddressLoad();

    describe('and the call to CartShippingAddressService is successful', () => {
      beforeEach(() => {
        daffShippingAddressDriverSpy.get.and.returnValue(of(mockCartShippingAddress));
        const cartShippingAddressLoadSuccessAction = new DaffCartShippingAddressLoadSuccess(mockCartShippingAddress);
        actions$ = hot('--a', { a: cartShippingAddressLoadAction });
        expected = cold('--b', { b: cartShippingAddressLoadSuccessAction });
      });

      it('should dispatch a CartShippingAddressLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CartShippingAddressService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to load cart shipping address'};
        const response = cold('#', {}, error);
        daffShippingAddressDriverSpy.get.and.returnValue(response);
        const cartShippingAddressLoadFailureAction = new DaffCartShippingAddressLoadFailure(error);
        actions$ = hot('--a', { a: cartShippingAddressLoadAction });
        expected = cold('--b', { b: cartShippingAddressLoadFailureAction });
      });

      it('should dispatch a CartShippingAddressLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when CartShippingAddressUpdateAction is triggered', () => {
    let expected;
    let cartCreateAction;
    const street = 'updatedStreet';

    beforeEach(() => {
      mockCartShippingAddress.street = street;
      cartCreateAction = new DaffCartShippingAddressUpdate(mockCartShippingAddress);
    });

    describe('and the call to CartShippingAddressService is successful', () => {
      beforeEach(() => {
        daffShippingAddressDriverSpy.update.and.returnValue(of(mockCart));
        const cartCreateSuccessAction = new DaffCartShippingAddressUpdateSuccess(mockCart);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateSuccessAction });
      });

      it('should dispatch a CartShippingAddressUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CartShippingAddressService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to update cart shipping address'};
        const response = cold('#', {}, error);
        daffShippingAddressDriverSpy.update.and.returnValue(response);
        const cartCreateFailureAction = new DaffCartShippingAddressUpdateFailure(error);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateFailureAction });
      });

      it('should dispatch a CartShippingAddressUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });
});
