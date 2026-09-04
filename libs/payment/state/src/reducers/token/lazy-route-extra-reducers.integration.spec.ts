import { provideLocationMocks } from '@angular/common/testing';
import {
  Component,
  importProvidersFrom,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  provideRouter,
  Routes,
} from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import {
  Store,
  StoreModule,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  DAFF_PAYMENT_STORE_FEATURE_KEY,
  DaffPaymentGenerateTokenFailure,
  DaffPaymentReducersState,
  DaffPaymentStateModule,
  DaffPaymentStateRootSlice,
  daffPaymentProvideExtraReducers,
} from '@daffodil/payment/state';

/**
 * This test simulates a real application where the entire payment feature
 * (`DaffPaymentStateModule` plus a consumer's extra reducers) is registered
 * on a lazy-loaded route, rather than eagerly at the application root.
 *
 * It is a regression test for a bug where `DAFF_PAYMENT_REDUCERS` was
 * defined as a tree-shakable ("provided in root") `InjectionToken`. A token
 * defined that way always resolves its factory using the root environment
 * injector, even when it's actually requested from within a lazy-loaded
 * route's own child injector. As a result,
 * `inject(DAFF_PAYMENT_EXTRA_REDUCERS)` inside that factory could never see
 * extra reducers that were only provided on the lazy route - they would be
 * silently dropped. Without the fix, the assertion below fails because the
 * error added by `lazyExtraReducer` never makes it into state.
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

const lazyExtraReducer = (state: DaffPaymentReducersState) => ({
  ...state,
  payment: {
    ...state.payment,
    errors: [
      ...state.payment.errors,
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
          importProvidersFrom(DaffPaymentStateModule),
          ...daffPaymentProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/payment/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<DaffPaymentStateRootSlice>;

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

  it('runs the extra reducer registered alongside the state module on the lazy route', () => {
    store.dispatch(new DaffPaymentGenerateTokenFailure({
      code: 'code',
      message: 'already in state',
    }));

    let state: DaffPaymentReducersState;
    store.select(DAFF_PAYMENT_STORE_FEATURE_KEY).subscribe((s: DaffPaymentReducersState) => state = s);

    expect(state.payment.errors).toContain(extraError);
  });
});
