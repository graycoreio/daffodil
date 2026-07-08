import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffCartDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { CartResolverEffects } from './cart-resolver.effects';
import {
  ResolveCart,
  ResolveCartSuccess,
  ResolveCartFailure,
} from '../actions/cart-resolver.actions';

describe('CartResolverEffects', () => {
  let actions$: Observable<any>;
  let effects: CartResolverEffects;
  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;
  let driver: DaffCartServiceInterface<DaffCart>;
  let cartFacade: MockDaffCartFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
        DaffCartStateTestingModule,
      ],
      providers: [
        CartResolverEffects,
        provideMockActions(() => actions$),
      ],
    });

    cartFacade = TestBed.inject(MockDaffCartFacade);
    effects = TestBed.inject(CartResolverEffects);
    cartFactory = TestBed.inject(DaffCartFactory);
    driver = TestBed.inject(DaffCartDriver);

    stubCart = cartFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onResolveCart$', () => {
    const resolveCartAction = new ResolveCart();

    describe('when cart in redux state is defined', () => {
      beforeEach(() => {
        cartFacade.cart$.next(stubCart);
      });

      it('should dispatch a ResolveCartSuccess action', () => {
        const resolveCartSuccessAction = new ResolveCartSuccess(stubCart);
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: resolveCartAction });
          helpers.expectObservable(effects.onResolveCart$).toBe('--b', { b: resolveCartSuccessAction });
        });
      });
    });

    describe('when cart in redux state is null', () => {
      beforeEach(() => {
        cartFacade.cart$.next(null);
      });

      describe('and service call to cartService.get is successful', () => {
        beforeEach(() => {
          spyOn(driver, 'get').and.returnValue(of({
            response: stubCart,
            errors: [],
          }));
        });

        it('should dispatch a ResolveCartSuccess action', () => {
          const resolveCartSuccessAction = new ResolveCartSuccess(stubCart);
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            actions$ = helpers.hot('--a', { a: resolveCartAction });
            helpers.expectObservable(effects.onResolveCart$).toBe('--b', { b: resolveCartSuccessAction });
          });
        });
      });

      describe('and service call to cartService.get fails', () => {
        it('should dispatch a ResolveCartSuccessFailure action', () => {
          const resolveCartFailureAction = new ResolveCartFailure(null);
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            spyOn(driver, 'get').and.returnValue(helpers.cold<any>('#', {}));
            actions$ = helpers.hot('--a', { a: resolveCartAction });
            helpers.expectObservable(effects.onResolveCart$).toBe('--b', { b: resolveCartFailureAction });
          });
        });
      });
    });
  });
});
