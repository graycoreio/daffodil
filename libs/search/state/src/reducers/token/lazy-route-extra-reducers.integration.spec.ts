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
  ActionReducer,
  Store,
  StoreModule,
} from '@ngrx/store';

import {
  DAFF_SEARCH_STORE_FEATURE_KEY,
  DaffSearchLoad,
  DaffSearchReducersState,
  DaffSearchStateModule,
  DaffSearchStateRootSlice,
  daffSearchProvideExtraReducers,
} from '@daffodil/search/state';

/**
 * This test simulates a real application where the entire search feature
 * (`DaffSearchStateModule` plus a consumer's extra reducers) is registered
 * on a lazy-loaded route, rather than eagerly at the application root.
 *
 * It is a regression test for a bug where `DAFF_SEARCH_REDUCERS` was defined
 * as a tree-shakable ("provided in root") `InjectionToken`. A token defined
 * that way always resolves its factory using the root environment injector,
 * even when it's actually requested from within a lazy-loaded route's own
 * child injector. As a result, `inject(DAFF_SEARCH_EXTRA_REDUCERS)` inside
 * that factory could never see extra reducers that were only provided on the
 * lazy route - they would be silently dropped. Without the fix, the
 * assertion below fails because the query added by `lazyExtraReducer` never
 * makes it into state.
 */

@Component({
  selector: 'daff-lazy-route-test',
  template: '',
  standalone: true,
})
class DaffLazyRouteTestComponent {}

const EXTRA_REDUCER_QUERY = 'added-by-lazily-loaded-extra-reducer';

const lazyExtraReducer: ActionReducer<DaffSearchReducersState> = (state, action) => ({
  ...state,
  search: {
    ...state.search,
    recent: [
      ...state.search.recent,
      EXTRA_REDUCER_QUERY,
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
          importProvidersFrom(DaffSearchStateModule),
          ...daffSearchProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/search/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<DaffSearchStateRootSlice>;

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
    store.dispatch(new DaffSearchLoad('any'));

    let state: DaffSearchReducersState;
    store.select(DAFF_SEARCH_STORE_FEATURE_KEY).subscribe((s: DaffSearchReducersState) => state = s);

    expect(state.search.recent).toContain(EXTRA_REDUCER_QUERY);
  });
});
