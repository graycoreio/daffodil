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

import { DaffCartBillingAddressEffects } from './cart-billing-address.effects';
import {
  DaffCartBillingAddressLoad,
  DaffCartBillingAddressLoadSuccess,
  DaffCartBillingAddressLoadFailure,
  DaffCartBillingAddressUpdate,
  DaffCartBillingAddressUpdateSuccess,
  DaffCartBillingAddressUpdateFailure
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartBillingAddressServiceInterface, DaffCartBillingAddressDriver } from '../drivers/interfaces/cart-billing-address-service.interface';

describe('Daffodil | Cart | CartBillingAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartBillingAddressEffects<DaffCartAddress, DaffCart>;

  let mockCart: DaffCart;
  let mockCartBillingAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffBillingAddressDriverSpy: jasmine.SpyObj<DaffCartBillingAddressServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartBillingAddressEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartBillingAddressDriver,
          useValue: jasmine.createSpyObj('DaffCartBillingAddressDriver', ['get', 'update'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.get<DaffCartBillingAddressEffects<DaffCartAddress, DaffCart>>(DaffCartBillingAddressEffects);

    daffBillingAddressDriverSpy = TestBed.get<DaffCartBillingAddressServiceInterface>(DaffCartBillingAddressDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);

    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);
    cartAddressFactory = TestBed.get<DaffCartAddressFactory>(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartBillingAddress = cartAddressFactory.create();

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartBillingAddressLoadAction is triggered', () => {
    let expected;
    const cartBillingAddressLoadAction = new DaffCartBillingAddressLoad();

    describe('and the call to CartBillingAddressService is successful', () => {
      beforeEach(() => {
        daffBillingAddressDriverSpy.get.and.returnValue(of(mockCartBillingAddress));
        const cartBillingAddressLoadSuccessAction = new DaffCartBillingAddressLoadSuccess(mockCartBillingAddress);
        actions$ = hot('--a', { a: cartBillingAddressLoadAction });
        expected = cold('--b', { b: cartBillingAddressLoadSuccessAction });
      });

      it('should dispatch a CartBillingAddressLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CartBillingAddressService fails', () => {
      beforeEach(() => {
        const error = 'Failed to load cart billing address';
        const response = cold('#', {}, error);
        daffBillingAddressDriverSpy.get.and.returnValue(response);
        const cartBillingAddressLoadFailureAction = new DaffCartBillingAddressLoadFailure(error);
        actions$ = hot('--a', { a: cartBillingAddressLoadAction });
        expected = cold('--b', { b: cartBillingAddressLoadFailureAction });
      });

      it('should dispatch a CartBillingAddressLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when CartBillingAddressUpdateAction is triggered', () => {
    let expected;
    let cartCreateAction;
    const street = 'updatedStreet';

    beforeEach(() => {
      mockCartBillingAddress.street = street;
      cartCreateAction = new DaffCartBillingAddressUpdate(mockCartBillingAddress);
    });

    describe('and the call to CartBillingAddressService is successful', () => {
      beforeEach(() => {
        daffBillingAddressDriverSpy.update.and.returnValue(of(mockCart));
        const cartCreateSuccessAction = new DaffCartBillingAddressUpdateSuccess(mockCart);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateSuccessAction });
      });

      it('should dispatch a CartBillingAddressUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CartBillingAddressService fails', () => {
      beforeEach(() => {
        const error = 'Failed to update cart billing address';
        const response = cold('#', {}, error);
        daffBillingAddressDriverSpy.update.and.returnValue(response);
        const cartCreateFailureAction = new DaffCartBillingAddressUpdateFailure(error);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateFailureAction });
      });

      it('should dispatch a CartBillingAddressUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });
});
