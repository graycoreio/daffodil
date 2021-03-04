import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffCartDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartService } from '@daffodil/cart/driver/testing';
import { daffCartReducers } from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';

import {
  ResolveCart,
  ResolveCartSuccess,
  ResolveCartFailure,
} from '../actions/cart-resolver.actions';
import { CartResolverEffects } from './cart-resolver.effects';

describe('CartResolverEffects', () => {
  let actions$: Observable<any>;
  let effects: CartResolverEffects;
  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;
  let driver: DaffCartServiceInterface<DaffCart>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(daffCartReducers),
        }),
      ],
      providers: [
        CartResolverEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartDriver,
          useValue: new DaffTestingCartService(new DaffCartFactory()),
        },
      ],
    });

    effects = TestBed.inject(CartResolverEffects);
    cartFactory = TestBed.inject(DaffCartFactory);
    stubCart = cartFactory.create();
    driver = TestBed.inject(DaffCartDriver);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onResolveCart$', () => {

    let expected;
    const resolveCartAction = new ResolveCart();

    describe('when cart in redux state is defined', () => {

      beforeEach(() => {
        spyOn(effects, 'selectStoreCart').and.returnValue(of(stubCart));
      });

      it('should dispatch a ResolveCartSuccess action', () => {
        const resolveCartSuccessAction = new ResolveCartSuccess(stubCart);
        actions$ = hot('--a', { a: resolveCartAction });
        expected = cold('--b', { b: resolveCartSuccessAction });

        expect(effects.onResolveCart$).toBeObservable(expected);
      });
    });

    describe('when cart in redux state is null', () => {

      beforeEach(() => {
        spyOn(effects, 'selectStoreCart').and.returnValue(of(null));
      });

      describe('and service call to cartService.get is successful', () => {

        beforeEach(() => {
          spyOn(driver, 'get').and.returnValue(of(stubCart));
        });

        it('should dispatch a ResolveCartSuccess action', () => {
          const resolveCartSuccessAction = new ResolveCartSuccess(stubCart);
          actions$ = hot('--a', { a: resolveCartAction });
          expected = cold('--b', { b: resolveCartSuccessAction });

          expect(effects.onResolveCart$).toBeObservable(expected);
        });
      });

      describe('and service call to cartService.get fails', () => {

        beforeEach(() => {
          const response = cold('#', {});
          spyOn(driver, 'get').and.returnValue(response);
        });

        it('should dispatch a ResolveCartSuccessFailure action', () => {
          const resolveCartFailureAction = new ResolveCartFailure(null);
          actions$ = hot('--a', { a: resolveCartAction });
          expected = cold('--b', { b: resolveCartFailureAction });

          expect(effects.onResolveCart$).toBeObservable(expected);
        });
      });
    });
  });
});
