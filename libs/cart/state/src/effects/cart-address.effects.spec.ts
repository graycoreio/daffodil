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
  DaffCartAddressServiceInterface,
  DaffCartAddressDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartStorageFailure,
  DaffCartAddressUpdate,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import {
  DaffStateError,
  daffTransformErrorToStateError,
} from '@daffodil/core/state';

import { DaffCartAddressEffects } from './cart-address.effects';

describe('@daffodil/cart/state | DaffCartAddressEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartAddressEffects;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffAddressDriver: DaffCartAddressServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverUpdateSpy: jasmine.Spy<DaffCartAddressServiceInterface['update']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  const cartStorageFailureAction = new DaffCartStorageFailure([daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.'))]);
  const throwStorageError = () => {
    throw new DaffStorageServiceError('An error occurred during storage.');
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartAddressEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartAddressEffects);

    daffAddressDriver = TestBed.inject(DaffCartAddressDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();

    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    driverUpdateSpy = spyOn(daffAddressDriver, 'update');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartAddressUpdateAction is triggered', () => {
    let cartAddressUpdateAction;
    const street = 'updatedStreet';

    beforeEach(() => {
      mockCartAddress.street = street;
      cartAddressUpdateAction = new DaffCartAddressUpdate(mockCartAddress);
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        getCartIdSpy.and.callFake(throwStorageError);
      });

      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartAddressUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });

    describe('and the calls to the services are successful', () => {
      it('should dispatch a CartAddressUpdateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverUpdateSpy.and.returnValue(of(mockCart));
          const cartAddressUpdateSuccessAction = new DaffCartAddressUpdateSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartAddressUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartAddressUpdateSuccessAction });
        });
      });
    });

    describe('and the call to CartAddressService fails', () => {
      it('should dispatch a CartAddressUpdateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart address' };
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const cartAddressUpdateFailureAction = new DaffCartAddressUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: cartAddressUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartAddressUpdateFailureAction });
        });
      });
    });
  });
});
