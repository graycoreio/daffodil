import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartShippingRate,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingInformationServiceInterface,
  DaffCartShippingInformationDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartShippingInformationLoad,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingInformationDelete,
  DaffCartShippingInformationDeleteSuccess,
  DaffCartShippingInformationDeleteFailure,
  DaffCartShippingInformationUpdate,
  DaffCartShippingInformationUpdateSuccess,
  DaffCartShippingInformationUpdateFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartShippingInformationEffects } from './cart-shipping-information.effects';

describe('@daffodil/cart/state | DaffCartShippingInformationEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartShippingInformationEffects;

  let mockCart: DaffCart;
  let mockCartShippingInformation: DaffCartShippingRate;

  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  let daffShippingInformationDriver: DaffCartShippingInformationServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy<DaffCartShippingInformationServiceInterface['get']>;
  let driverUpdateSpy: jasmine.Spy<DaffCartShippingInformationServiceInterface['update']>;
  let driverDeleteSpy: jasmine.Spy<DaffCartShippingInformationServiceInterface['delete']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartShippingInformationEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartShippingInformationEffects);

    daffShippingInformationDriver = TestBed.inject(DaffCartShippingInformationDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartShippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingInformation = cartShippingRateFactory.create();

    driverGetSpy = spyOn(daffShippingInformationDriver, 'get');
    driverUpdateSpy = spyOn(daffShippingInformationDriver, 'update');
    driverDeleteSpy = spyOn(daffShippingInformationDriver, 'delete');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartShippingInformationLoadAction is triggered', () => {
    const cartShippingInformationLoadAction = new DaffCartShippingInformationLoad();

    describe('and the call to CartShippingInformationService is successful', () => {
      it('should dispatch a CartShippingInformationLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of(mockCartShippingInformation));
          const cartShippingInformationLoadSuccessAction = new DaffCartShippingInformationLoadSuccess(mockCartShippingInformation);
          actions$ = helpers.hot('--a', { a: cartShippingInformationLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartShippingInformationLoadSuccessAction });
        });
      });
    });

    describe('and the call to CartShippingInformationService fails', () => {
      it('should dispatch a CartShippingInformationLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart shipping information' };
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const cartShippingInformationLoadFailureAction = new DaffCartShippingInformationLoadFailure([error]);
          actions$ = helpers.hot('--a', { a: cartShippingInformationLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartShippingInformationLoadFailureAction });
        });
      });
    });
  });

  describe('when CartShippingInformationUpdateAction is triggered', () => {
    let cartCreateAction;
    const carrier = 'updatedCarrier';

    beforeEach(() => {
      mockCartShippingInformation.carrier = carrier;
      cartCreateAction = new DaffCartShippingInformationUpdate(mockCartShippingInformation);
    });

    describe('and the call to CartShippingInformationService is successful', () => {
      it('should dispatch a CartShippingInformationUpdateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverUpdateSpy.and.returnValue(of(mockCart));
          const cartCreateSuccessAction = new DaffCartShippingInformationUpdateSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartCreateSuccessAction });
        });
      });
    });

    describe('and the call to CartShippingInformationService fails', () => {
      it('should dispatch a CartShippingInformationUpdateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart shipping information' };
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const cartCreateFailureAction = new DaffCartShippingInformationUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartCreateFailureAction });
        });
      });
    });
  });

  describe('when CartShippingInformationDeleteAction is triggered', () => {
    const cartShippingInformationDeleteAction = new DaffCartShippingInformationDelete();

    describe('and the clear call to driver is successful', () => {
      it('should return a DaffCartShippingInformationDeleteSucess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          mockCart.shipping_information = null;
          driverDeleteSpy.and.returnValue(of(mockCart));
          const cartShippingInformationDeleteSuccessAction = new DaffCartShippingInformationDeleteSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartShippingInformationDeleteAction });
          helpers.expectObservable(effects.delete$).toBe('--b', { b: cartShippingInformationDeleteSuccessAction });
        });
      });
    });

    describe('and the call to CartShippingInformationService fails', () => {
      it('should return a DaffCartShippingInformationDeleteFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to delete the cart shipping information' };
          const response = helpers.cold<any>('#', {}, error);
          driverDeleteSpy.and.returnValue(response);
          const cartShippingInformationDeleteFailureAction = new DaffCartShippingInformationDeleteFailure([error]);
          actions$ = helpers.hot('--a', { a: cartShippingInformationDeleteAction });
          helpers.expectObservable(effects.delete$).toBe('--b', { b: cartShippingInformationDeleteFailureAction });
        });
      });
    });
  });
});
