import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffStorageServiceError } from '@daffodil/core';
import {
  DaffCart,
  DaffCartAddress,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DaffCartAddressServiceInterface, DaffCartAddressDriver } from '@daffodil/cart/driver';
import { DaffCartStorageFailure, DaffCartAddressUpdate, DaffCartAddressUpdateSuccess, DaffCartAddressUpdateFailure } from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';
import { DaffStateError, daffTransformErrorToStateError } from '@daffodil/core/state';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';

import { DaffCartAddressEffects } from './cart-address.effects';

describe('Daffodil | Cart | CartAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartAddressEffects<DaffCartAddress, DaffCart>;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffAddressDriver: DaffCartAddressServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverUpdateSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;

  const cartStorageFailureAction = new DaffCartStorageFailure(daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.')));
  const throwStorageError = () => { throw new DaffStorageServiceError('An error occurred during storage.') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot()
      ],
      providers: [
        DaffCartAddressEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject<DaffCartAddressEffects<DaffCartAddress, DaffCart>>(DaffCartAddressEffects);

    daffAddressDriver = TestBed.inject(DaffCartAddressDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject<DaffCartFactory>(DaffCartFactory);
    cartAddressFactory = TestBed.inject<DaffCartAddressFactory>(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();

    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    driverUpdateSpy = spyOn(daffAddressDriver, 'update');
    getCartIdSpy.and.returnValue(String(mockCart.id));
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
        getCartIdSpy.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartAddressUpdateAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the calls to the services are successful', () => {
      beforeEach(() => {
        driverUpdateSpy.and.returnValue(of(mockCart));
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
        const error: DaffStateError = {code: 'code', message: 'Failed to update cart address'};
        const response = cold('#', {}, error);
        driverUpdateSpy.and.returnValue(response);
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
