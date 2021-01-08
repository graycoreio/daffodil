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
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';

import { DaffCartPaymentMethodsEffects } from './cart-payment-methods.effects';

describe('Daffodil | Cart | DaffCartPaymentMethodsEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartPaymentMethodsEffects<DaffCartPaymentMethod>;

  let mockCart: DaffCart;
  let mockCartPaymentMethod: DaffCartPaymentMethod;

  let cartFactory: DaffCartFactory;
  let cartPaymentMethodFactory: DaffCartPaymentFactory;

  let paymentMethodsDriver: DaffCartPaymentMethodsServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverListSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot()
      ],
      providers: [
        DaffCartPaymentMethodsEffects,
        provideMockActions(() => actions$),
      ]
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
    getCartIdSpy.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartPaymentMethodsLoadAction is triggered', () => {
    let expected;
    const cartCreateAction = new DaffCartPaymentMethodsLoad();

    describe('and the call to CartService is successful', () => {
      beforeEach(() => {
        driverListSpy.and.returnValue(of([mockCartPaymentMethod]));
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
        driverListSpy.and.returnValue(response);
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
