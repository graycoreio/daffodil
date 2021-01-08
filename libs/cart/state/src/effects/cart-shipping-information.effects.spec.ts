import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffCart,
  DaffCartShippingInformation,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingInformationLoad,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingInformationDelete,
  DaffCartShippingInformationDeleteSuccess,
  DaffCartShippingInformationDeleteFailure,
  DaffCartShippingInformationUpdate,
  DaffCartShippingInformationUpdateSuccess,
  DaffCartShippingInformationUpdateFailure
} from '@daffodil/cart/state';
import { DaffCartShippingInformationServiceInterface, DaffCartShippingInformationDriver } from '@daffodil/cart/driver';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';

import { DaffCartShippingInformationEffects } from './cart-shipping-information.effects';

describe('Daffodil | Cart | CartShippingInformationEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartShippingInformationEffects<DaffCartShippingInformation, DaffCart>;

  let mockCart: DaffCart;
  let mockCartShippingInformation: DaffCartShippingInformation;

  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  let daffShippingInformationDriver: DaffCartShippingInformationServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy;
  let driverUpdateSpy: jasmine.Spy;
  let driverDeleteSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot()
      ],
      providers: [
        DaffCartShippingInformationEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject(DaffCartShippingInformationEffects);

    daffShippingInformationDriver = TestBed.inject(DaffCartShippingInformationDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartShippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingInformation = {
      ...cartShippingRateFactory.create(),
      address_id: null
    };

    driverGetSpy = spyOn(daffShippingInformationDriver, 'get');
    driverUpdateSpy = spyOn(daffShippingInformationDriver, 'update');
    driverDeleteSpy = spyOn(daffShippingInformationDriver, 'delete');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartShippingInformationLoadAction is triggered', () => {
    let expected;
    const cartShippingInformationLoadAction = new DaffCartShippingInformationLoad();

    describe('and the call to CartShippingInformationService is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockCartShippingInformation));
        const cartShippingInformationLoadSuccessAction = new DaffCartShippingInformationLoadSuccess(mockCartShippingInformation);
        actions$ = hot('--a', { a: cartShippingInformationLoadAction });
        expected = cold('--b', { b: cartShippingInformationLoadSuccessAction });
      });

      it('should dispatch a CartShippingInformationLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CartShippingInformationService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to load cart shipping information'};
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const cartShippingInformationLoadFailureAction = new DaffCartShippingInformationLoadFailure(error);
        actions$ = hot('--a', { a: cartShippingInformationLoadAction });
        expected = cold('--b', { b: cartShippingInformationLoadFailureAction });
      });

      it('should dispatch a CartShippingInformationLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when CartShippingInformationUpdateAction is triggered', () => {
    let expected;
    let cartCreateAction;
    const carrier = 'updatedCarrier';

    beforeEach(() => {
      mockCartShippingInformation.carrier = carrier;
      cartCreateAction = new DaffCartShippingInformationUpdate(mockCartShippingInformation);
    });

    describe('and the call to CartShippingInformationService is successful', () => {
      beforeEach(() => {
        driverUpdateSpy.and.returnValue(of(mockCart));
        const cartCreateSuccessAction = new DaffCartShippingInformationUpdateSuccess(mockCart);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateSuccessAction });
      });

      it('should dispatch a CartShippingInformationUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CartShippingInformationService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to update cart shipping information'};
        const response = cold('#', {}, error);
        driverUpdateSpy.and.returnValue(response);
        const cartCreateFailureAction = new DaffCartShippingInformationUpdateFailure(error);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateFailureAction });
      });

      it('should dispatch a CartShippingInformationUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });

  describe('when CartShippingInformationDeleteAction is triggered', () => {
    let expected;
    const cartShippingInformationDeleteAction = new DaffCartShippingInformationDelete();

    describe('and the clear call to driver is successful', () => {
      beforeEach(() => {
        mockCart.shipping_information = null;
        driverDeleteSpy.and.returnValue(of(mockCart));
        const cartShippingInformationDeleteSuccessAction = new DaffCartShippingInformationDeleteSuccess(mockCart);
        actions$ = hot('--a', { a: cartShippingInformationDeleteAction });
        expected = cold('--b', { b: cartShippingInformationDeleteSuccessAction });
      });
      it('should return a DaffCartShippingInformationDeleteSucess action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });

    describe('and the call to CartShippingInformationService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to delete the cart shipping information'};
        const response = cold('#', {}, error);
        driverDeleteSpy.and.returnValue(response);
        const cartShippingInformationDeleteFailureAction = new DaffCartShippingInformationDeleteFailure(error);
        actions$ = hot('--a', { a: cartShippingInformationDeleteAction });
        expected = cold('--b', { b: cartShippingInformationDeleteFailureAction });
      });
      it('should return a DaffCartShippingInformationDeleteFailure action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });
  });
});
