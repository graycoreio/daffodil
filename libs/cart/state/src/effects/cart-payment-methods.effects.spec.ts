import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartPaymentMethodsServiceInterface,
  DaffCartPaymentMethodsDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartPaymentMethodsLoad,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartPaymentMethodsEffects } from './cart-payment-methods.effects';

describe('@daffodil/cart/state | DaffCartPaymentMethodsEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartPaymentMethodsEffects<DaffCartPaymentMethod>;

  let mockCart: DaffCart;
  let mockCartPaymentMethod: DaffCartPaymentMethod;

  let cartFactory: DaffCartFactory;
  let cartPaymentMethodFactory: DaffCartPaymentFactory;

  let paymentMethodsDriver: DaffCartPaymentMethodsServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverListSpy: jasmine.Spy<DaffCartPaymentMethodsServiceInterface['list']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartPaymentMethodsEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartPaymentMethodsEffects);

    paymentMethodsDriver = TestBed.inject(DaffCartPaymentMethodsDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartPaymentMethodFactory = TestBed.inject(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPaymentMethod = cartPaymentMethodFactory.create();

    driverListSpy = spyOn(paymentMethodsDriver, 'list');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartPaymentMethodsLoadAction is triggered', () => {
    const cartCreateAction = new DaffCartPaymentMethodsLoad();

    describe('and the call to CartService is successful', () => {
      it('should dispatch a CartPaymentMethodsLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverListSpy.and.returnValue(of([mockCartPaymentMethod]));
          const cartCreateSuccessAction = new DaffCartPaymentMethodsLoadSuccess([mockCartPaymentMethod]);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartCreateSuccessAction });
        });
      });
    });

    describe('and the call to CartService fails', () => {
      it('should dispatch a CartPaymentMethodsLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to list cart payment methods' };
          const response = helpers.cold<any>('#', {}, error);
          driverListSpy.and.returnValue(response);
          const cartCreateFailureAction = new DaffCartPaymentMethodsLoadFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartCreateFailureAction });
        });
      });
    });
  });
});
