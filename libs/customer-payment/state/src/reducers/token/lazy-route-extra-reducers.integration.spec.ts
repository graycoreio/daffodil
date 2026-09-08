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

import {
  daffComposeReducers,
  DaffStateError,
} from '@daffodil/core/state';
import {
  DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY,
  DaffCustomerPaymentListFailure,
  DaffCustomerPaymentReducersState,
  daffCustomerPaymentEntitiesReducer,
  daffCustomerPaymentProvideExtraReducers,
  daffCustomerPaymentReducer,
} from '@daffodil/customer-payment/state';

import { DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_CUSTOMER_PAYMENT_REDUCERS,
  provideDaffCustomerPaymentReducersFactory,
} from './reducers.token';

/**
 * This test simulates a real application where the customer payment
 * feature's reducers (registered the same way
 * `DaffCustomerPaymentStateModule` registers them) plus a consumer's extra
 * reducers are provided on a lazy-loaded route, rather than eagerly at the
 * application root.
 *
 * It is a regression test for a bug where `DAFF_CUSTOMER_PAYMENT_REDUCERS`
 * was defined as a tree-shakable ("provided in root") `InjectionToken`. A
 * token defined that way always resolves its factory using the root
 * environment injector, even when it's actually requested from within a
 * lazy-loaded route's own child injector. As a result,
 * `inject(DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS)` inside that factory could
 * never see extra reducers that were only provided on the lazy route - they
 * would be silently dropped. Without the fix, the assertion below fails
 * because the error added by `lazyExtraReducer` never makes it into state.
 */

@Component({
  selector: 'daff-lazy-route-test',
  template: '',
  standalone: true,
})
class DaffLazyRouteTestComponent {}

const extraError: DaffStateError = {
  code: 'code',
  message: 'added-by-lazily-loaded-extra-reducer',
};

const lazyExtraReducer = (state: DaffCustomerPaymentReducersState) => ({
  ...state,
  payment: {
    ...state.payment,
    daffErrors: [
      ...state.payment.daffErrors,
      extraError,
    ],
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
          importProvidersFrom(StoreModule.forFeature(DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY, DAFF_CUSTOMER_PAYMENT_REDUCERS)),
          provideDaffCustomerPaymentReducersFactory(() => daffComposeReducers([
            combineReducers({
              payment: daffCustomerPaymentReducer,
              paymentEntities: daffCustomerPaymentEntitiesReducer,
            }),
            ...inject(DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS),
          ])),
          ...daffCustomerPaymentProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/customer-payment/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<{ [DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY]: DaffCustomerPaymentReducersState }>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        importProvidersFrom(StoreModule.forRoot({})),
      ],
    });

    store = TestBed.inject(Store);

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/lazy', DaffLazyRouteTestComponent);
  });

  it('runs the extra reducer registered alongside the reducers on the lazy route', () => {
    store.dispatch(new DaffCustomerPaymentListFailure({
      code: 'code',
      message: 'already in state',
    }));

    let state: DaffCustomerPaymentReducersState;
    store.select(DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY).subscribe((s: DaffCustomerPaymentReducersState) => state = s);

    expect(state.payment.daffErrors).toContain(extraError);
  });
});
