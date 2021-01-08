import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartAddress,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DaffCartBillingAddressServiceInterface, DaffCartBillingAddressDriver } from '@daffodil/cart/driver';
import { DaffCartBillingAddressLoad, DaffCartBillingAddressLoadSuccess, DaffCartBillingAddressLoadFailure, DaffCartBillingAddressUpdate, DaffCartBillingAddressUpdateSuccess, DaffCartBillingAddressUpdateFailure } from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';

import { DaffCartBillingAddressEffects } from './cart-billing-address.effects';

describe('Daffodil | Cart | CartBillingAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartBillingAddressEffects<DaffCartAddress, DaffCart>;

  let mockCart: DaffCart;
  let mockCartBillingAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffBillingAddressDriver: DaffCartBillingAddressServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy;
  let driverUpdateSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot()
      ],
      providers: [
        DaffCartBillingAddressEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject<DaffCartBillingAddressEffects<DaffCartAddress, DaffCart>>(DaffCartBillingAddressEffects);

    daffBillingAddressDriver = TestBed.inject(DaffCartBillingAddressDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject<DaffCartFactory>(DaffCartFactory);
    cartAddressFactory = TestBed.inject<DaffCartAddressFactory>(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartBillingAddress = cartAddressFactory.create();

    driverGetSpy = spyOn(daffBillingAddressDriver, 'get');
    driverUpdateSpy = spyOn(daffBillingAddressDriver, 'update');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartBillingAddressLoadAction is triggered', () => {
    let expected;
    const cartBillingAddressLoadAction = new DaffCartBillingAddressLoad();

    describe('and the call to CartBillingAddressService is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockCartBillingAddress));
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
        const error: DaffStateError = {code: 'code', message: 'Failed to load cart billing address'};
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
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
        driverUpdateSpy.and.returnValue(of(mockCart));
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
        const error: DaffStateError = {code: 'code', message: 'Failed to update cart billing address'};
        const response = cold('#', {}, error);
        driverUpdateSpy.and.returnValue(response);
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
