import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffCartShippingAddressEffects } from './cart-shipping-address.effects';
import {
  DaffCartShippingAddressLoad,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartShippingAddressServiceInterface, DaffCartShippingAddressDriver } from '../drivers/interfaces/cart-shipping-address-service.interface';

describe('Daffodil | Cart | CartShippingAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartShippingAddressEffects<DaffCartAddress, DaffCart>;

  let mockCart: DaffCart;
  let mockCartShippingAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffShippingAddressDriverSpy: jasmine.SpyObj<DaffCartShippingAddressServiceInterface<DaffCartAddress, DaffCart>>;

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

    effects = TestBed.get<DaffCartShippingAddressEffects<DaffCartAddress, DaffCart>>(DaffCartShippingAddressEffects);

    daffShippingAddressDriverSpy = TestBed.get<DaffCartShippingAddressServiceInterface<DaffCartAddress, DaffCart>>(DaffCartShippingAddressDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);

    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);
    cartAddressFactory = TestBed.get<DaffCartAddressFactory>(DaffCartAddressFactory);

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
        const error = 'Failed to load cart shipping address';
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
        const error = 'Failed to update cart shipping address';
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
