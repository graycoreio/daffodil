import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface, DaffCartPaymentMethodsDriver } from '@daffodil/cart/driver';
import { DaffCartPaymentMethodsLoad, DaffCartPaymentMethodsLoadSuccess, DaffCartPaymentMethodsLoadFailure } from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartPaymentMethodsEffects } from './cart-payment-methods.effects';

describe('Daffodil | Cart | DaffCartPaymentMethodsEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartPaymentMethodsEffects<DaffCartPaymentMethod>;

  let mockCart: DaffCart;
  let mockCartPaymentMethod: DaffCartPaymentMethod;

  let cartFactory: DaffCartFactory;
  let cartPaymentMethodFactory: DaffCartPaymentFactory;

  let paymentMethodsDriverSpy: jasmine.SpyObj<DaffCartPaymentMethodsServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartPaymentMethodsEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartPaymentMethodsDriver,
          useValue: jasmine.createSpyObj('DaffCartPaymentMethodsDriver', ['list'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.inject<DaffCartPaymentMethodsEffects<DaffCartPaymentMethod>>(DaffCartPaymentMethodsEffects);

    paymentMethodsDriverSpy = TestBed.inject<DaffCartPaymentMethodsServiceInterface>(DaffCartPaymentMethodsDriver);
    daffCartStorageSpy = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject<DaffCartFactory>(DaffCartFactory);
    cartPaymentMethodFactory = TestBed.inject<DaffCartPaymentFactory>(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPaymentMethod = cartPaymentMethodFactory.create();

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartPaymentMethodsLoadAction is triggered', () => {
    let expected;
    const cartCreateAction = new DaffCartPaymentMethodsLoad();

    describe('and the call to CartService is successful', () => {
      beforeEach(() => {
        paymentMethodsDriverSpy.list.and.returnValue(of([mockCartPaymentMethod]));
        const cartCreateSuccessAction = new DaffCartPaymentMethodsLoadSuccess([mockCartPaymentMethod]);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateSuccessAction });
      });

      it('should dispatch a CartPaymentMethodsLoadSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to list cart payment methods'};
        const response = cold('#', {}, error);
        paymentMethodsDriverSpy.list.and.returnValue(response);
        const cartCreateFailureAction = new DaffCartPaymentMethodsLoadFailure(error);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateFailureAction });
      });

      it('should dispatch a CartPaymentMethodsLoadFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});
