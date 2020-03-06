import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, EMPTY } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';

import { DaffCartPaymentMethodsEffects } from './cart-payment-methods.effects';
import {
  DaffCartPaymentMethodsLoad,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadFailure
} from '../actions';
import {
	DaffCartPaymentMethodsServiceInterface,
	DaffCartPaymentMethodsDriver,
} from '../drivers/interfaces/cart-payment-methods-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';

describe('Daffodil | Cart | DaffCartPaymentMethodsEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartPaymentMethodsEffects<DaffCartPaymentMethod>;

  let mockCart: DaffCart;
  let mockCartPaymentMethod: DaffCartPaymentMethod;

  let cartFactory: DaffCartFactory;
  let cartPaymentMethodFactory: DaffCartPaymentFactory;

  let paymentMethodsDriverSpy: jasmine.SpyObj<DaffCartPaymentMethodsServiceInterface<DaffCartPaymentMethod>>;

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

    effects = TestBed.get<DaffCartPaymentMethodsEffects<DaffCartPaymentMethod>>(DaffCartPaymentMethodsEffects);

    paymentMethodsDriverSpy = TestBed.get<DaffCartPaymentMethodsServiceInterface<DaffCartPaymentMethod>>(DaffCartPaymentMethodsDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);

    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);
    cartPaymentMethodFactory = TestBed.get<DaffCartPaymentFactory>(DaffCartPaymentFactory);

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
        const error = 'Failed to list cart payment methods';
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
