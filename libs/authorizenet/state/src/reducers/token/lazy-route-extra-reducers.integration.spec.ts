import { provideLocationMocks } from '@angular/common/testing';
import {
  inject,
  importProvidersFrom,
  Component,
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
  DAFF_AUTHORIZENET_STORE_FEATURE_KEY,
  DaffAuthorizeNetReducersState,
  DaffAuthorizeNetStateRootSlice,
  DaffLoadAcceptJsFailure,
  daffAuthorizeNetProvideExtraReducers,
  daffAuthorizeNetReducers,
} from '@daffodil/authorizenet/state';
import {
  daffComposeReducers ,
  DaffStateError,
} from '@daffodil/core/state';

import { DAFF_AUTHORIZE_NET_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_AUTHORIZE_NET_REDUCERS,
  provideDaffAuthorizeNetReducersFactory,
} from './reducers.token';

/**
 * This test simulates a real application where the authorizenet feature's
 * reducers (registered the same way `DaffAuthorizeNetStateModule` registers
 * them) plus a consumer's extra reducers are provided on a lazy-loaded
 * route, rather than eagerly at the application root.
 *
 * It is a regression test for a bug where `DAFF_AUTHORIZE_NET_REDUCERS` was
 * defined as a tree-shakable ("provided in root") `InjectionToken`. A token
 * defined that way always resolves its factory using the root environment
 * injector, even when it's actually requested from within a lazy-loaded
 * route's own child injector. As a result,
 * `inject(DAFF_AUTHORIZE_NET_EXTRA_REDUCERS)` inside that factory could
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

const lazyExtraReducer = (state: DaffAuthorizeNetReducersState) => ({
  ...state,
  authorizeNet: {
    ...state.authorizeNet,
    acceptJsLoadError: extraError,
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
          importProvidersFrom(StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, DAFF_AUTHORIZE_NET_REDUCERS)),
          provideDaffAuthorizeNetReducersFactory(() => daffComposeReducers([
            combineReducers(daffAuthorizeNetReducers),
            ...inject(DAFF_AUTHORIZE_NET_EXTRA_REDUCERS),
          ])),
          ...daffAuthorizeNetProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/authorizenet/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<DaffAuthorizeNetStateRootSlice>;

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
    store.dispatch(new DaffLoadAcceptJsFailure({
      code: 'code',
      message: 'already in state',
    }));

    let state: DaffAuthorizeNetReducersState;
    store.select(DAFF_AUTHORIZENET_STORE_FEATURE_KEY).subscribe((s: DaffAuthorizeNetReducersState) => state = s);

    expect(state.authorizeNet.acceptJsLoadError).toEqual(extraError);
  });
});
