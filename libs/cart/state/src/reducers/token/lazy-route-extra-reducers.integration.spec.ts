import { provideLocationMocks } from '@angular/common/testing';
import {
  Component,
  importProvidersFrom,
  inject,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  provideRouter,
  Routes,
} from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';

import { DaffCartPaymentMethod } from '@daffodil/cart';
import {
  DAFF_CART_RETRIEVAL_ACTIONS,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffCartPaymentLoadSuccess,
  DaffCartReducersState,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartProvideExtraReducers,
  daffCartReducers,
  daffCartRetrievalActionsReducerFactory,
} from '@daffodil/cart/state';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';
import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { DAFF_CART_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_CART_REDUCERS,
  provideDaffCartReducersFactory,
} from './reducers.token';

/**
 * This test simulates a real application where the cart feature's reducers
 * (registered the same way `DaffCartStateModule` registers them) plus a
 * consumer's extra reducers are provided on a lazy-loaded route, rather than
 * eagerly at the application root.
 *
 * It is a regression test for a bug where `DAFF_CART_REDUCERS` was defined
 * as a tree-shakable ("provided in root") `InjectionToken`. A token defined
 * that way always resolves its factory using the root environment injector,
 * even when it's actually requested from within a lazy-loaded route's own
 * child injector. As a result, `inject(DAFF_CART_EXTRA_REDUCERS)` inside
 * that factory could never see extra reducers that were only provided on
 * the lazy route - they would be silently dropped. Without the fix, the
 * assertion below fails because the extra reducer's contribution never
 * makes it into state.
 */

@Component({
  selector: 'daff-lazy-route-test',
  template: '',
  standalone: true,
})
class DaffLazyRouteTestComponent {}

const EXTRA_REDUCER_PAYMENT_METHOD = 'added-by-lazily-loaded-extra-reducer';

const lazyExtraReducer = (state: DaffCartReducersState) => ({
  ...state,
  cart: {
    ...state.cart,
    cart: {
      ...state.cart.cart,
      payment: {
        ...state.cart.cart.payment,
        method: EXTRA_REDUCER_PAYMENT_METHOD,
      },
    },
  },
});

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => Promise.resolve([
      {
        path: '',
        component: DaffLazyRouteTestComponent,
        providers: [
          importProvidersFrom(StoreModule.forFeature(DAFF_CART_STORE_FEATURE_KEY, DAFF_CART_REDUCERS)),
          provideDaffCartReducersFactory(() => {
            const retrievalActions = inject(DAFF_CART_RETRIEVAL_ACTIONS);

            return daffComposeReducers([
              combineReducers(daffCartReducers),
              combineReducers({
                cart: daffCartRetrievalActionsReducerFactory(retrievalActions),
                cartItems: daffCartItemEntitiesRetrievalActionsReducerFactory(retrievalActions),
                order: daffIdentityReducer,
              }),
              ...inject(DAFF_CART_EXTRA_REDUCERS),
            ]);
          }),
          ...daffCartProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/cart/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<{ [DAFF_CART_STORE_FEATURE_KEY]: DaffCartReducersState }>;
  let paymentFactory: DaffCartPaymentFactory;
  let payment: DaffCartPaymentMethod;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        importProvidersFrom(StoreModule.forRoot({})),
      ],
    });

    store = TestBed.inject(Store);
    paymentFactory = TestBed.inject(DaffCartPaymentFactory);
    payment = paymentFactory.create();

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/lazy', DaffLazyRouteTestComponent);
  });

  it('runs the extra reducer registered alongside the reducers on the lazy route', () => {
    store.dispatch(new DaffCartPaymentLoadSuccess(payment));

    let state: DaffCartReducersState;
    store.select(DAFF_CART_STORE_FEATURE_KEY).subscribe((s: DaffCartReducersState) => state = s);

    expect(state.cart.cart.payment.method).toEqual(EXTRA_REDUCER_PAYMENT_METHOD);
  });
});
