import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffStorageServiceError } from '@daffodil/core';
import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffCartAddressEffects } from './cart-address.effects';
import {
  DaffCartAddressUpdate,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
  DaffCartStorageFailure
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartAddressServiceInterface, DaffCartAddressDriver } from '../drivers/interfaces/cart-address-service.interface';

describe('Daffodil | Cart | CartAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartAddressEffects<DaffCartAddress, DaffCart>;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffAddressDriverSpy: jasmine.SpyObj<DaffCartAddressServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;
  const cartStorageFailureAction = new DaffCartStorageFailure('Cart Storage Failed');
  const throwStorageError = () => { throw new DaffStorageServiceError() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartAddressEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartAddressDriver,
          useValue: jasmine.createSpyObj('DaffCartAddressDriver', ['update'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.get<DaffCartAddressEffects<DaffCartAddress, DaffCart>>(DaffCartAddressEffects);

    daffAddressDriverSpy = TestBed.get<DaffCartAddressServiceInterface>(DaffCartAddressDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);

    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);
    cartAddressFactory = TestBed.get<DaffCartAddressFactory>(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartAddressUpdateAction is triggered', () => {
    let expected;
    let cartAddressUpdateAction;
    const street = 'updatedStreet';

    beforeEach(() => {
      mockCartAddress.street = street;
      cartAddressUpdateAction = new DaffCartAddressUpdate(mockCartAddress);
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartAddressUpdateAction });
        expected = cold('--(b|)', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the calls to the services are successful', () => {
      beforeEach(() => {
        daffAddressDriverSpy.update.and.returnValue(of(mockCart));
        const cartAddressUpdateSuccessAction = new DaffCartAddressUpdateSuccess(mockCart);
        actions$ = hot('--a', { a: cartAddressUpdateAction });
        expected = cold('--b', { b: cartAddressUpdateSuccessAction });
      });

      it('should dispatch a CartAddressUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CartAddressService fails', () => {
      beforeEach(() => {
        const error = 'Failed to update cart address';
        const response = cold('#', {}, error);
        daffAddressDriverSpy.update.and.returnValue(response);
        const cartAddressUpdateFailureAction = new DaffCartAddressUpdateFailure(error);
        actions$ = hot('--a', { a: cartAddressUpdateAction });
        expected = cold('--b', { b: cartAddressUpdateFailureAction });
      });

      it('should dispatch a CartAddressUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });
});
