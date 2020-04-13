import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartShippingInformation,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffCartShippingInformationEffects } from './cart-shipping-information.effects';
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
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartShippingInformationServiceInterface, DaffCartShippingInformationDriver } from '../drivers/interfaces/cart-shipping-information-service.interface';

describe('Daffodil | Cart | CartShippingInformationEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartShippingInformationEffects<DaffCartShippingInformation, DaffCart>;

  let mockCart: DaffCart;
  let mockCartShippingInformation: DaffCartShippingInformation;

  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  let daffShippingInformationDriverSpy: jasmine.SpyObj<DaffCartShippingInformationServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartShippingInformationEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartShippingInformationDriver,
          useValue: jasmine.createSpyObj('DaffCartShippingInformationDriver', ['get', 'update', 'delete'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.get<DaffCartShippingInformationEffects<DaffCartShippingInformation, DaffCart>>(DaffCartShippingInformationEffects);

    daffShippingInformationDriverSpy = TestBed.get<DaffCartShippingInformationServiceInterface>(DaffCartShippingInformationDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);

    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);
    cartShippingRateFactory = TestBed.get<DaffCartShippingRateFactory>(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingInformation = {
      ...cartShippingRateFactory.create(),
      address_id: null
    };

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartShippingInformationLoadAction is triggered', () => {
    let expected;
    const cartShippingInformationLoadAction = new DaffCartShippingInformationLoad();

    describe('and the call to CartShippingInformationService is successful', () => {
      beforeEach(() => {
        daffShippingInformationDriverSpy.get.and.returnValue(of(mockCartShippingInformation));
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
        const error = 'Failed to load cart shipping information';
        const response = cold('#', {}, error);
        daffShippingInformationDriverSpy.get.and.returnValue(response);
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
        daffShippingInformationDriverSpy.update.and.returnValue(of(mockCart));
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
        const error = 'Failed to update cart shipping information';
        const response = cold('#', {}, error);
        daffShippingInformationDriverSpy.update.and.returnValue(response);
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
        daffShippingInformationDriverSpy.delete.and.returnValue(of(mockCart));
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
        const error = 'Failed to delete the cart shipping information';
        const response = cold('#', {}, error);
        daffShippingInformationDriverSpy.delete.and.returnValue(response);
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
