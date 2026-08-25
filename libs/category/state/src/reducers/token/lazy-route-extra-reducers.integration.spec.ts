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
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffCategoryLoadFailure,
  DaffCategoryReducersState,
  daffCategoryProvideExtraReducers,
  daffCategoryReducers,
} from '@daffodil/category/state';
import {
  daffComposeReducers,
  DaffStateError,
} from '@daffodil/core/state';

import { DAFF_CATEGORY_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_CATEGORY_REDUCERS,
  provideDaffCategoryReducersFactory,
} from './reducers.token';

/**
 * This test simulates a real application where the category feature's
 * reducers (registered the same way `DaffCategoryStateModule` registers
 * them) plus a consumer's extra reducers are provided on a lazy-loaded
 * route, rather than eagerly at the application root.
 *
 * It is a regression test for a bug where `DAFF_CATEGORY_REDUCERS` was
 * defined as a tree-shakable ("provided in root") `InjectionToken`. A token
 * defined that way always resolves its factory using the root environment
 * injector, even when it's actually requested from within a lazy-loaded
 * route's own child injector. As a result,
 * `inject(DAFF_CATEGORY_EXTRA_REDUCERS)` inside that factory could never see
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

const lazyExtraReducer = (state: DaffCategoryReducersState) => ({
  ...state,
  category: {
    ...state.category,
    daffErrors: [
      ...state.category.daffErrors,
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
          importProvidersFrom(StoreModule.forFeature(DAFF_CATEGORY_STORE_FEATURE_KEY, DAFF_CATEGORY_REDUCERS)),
          provideDaffCategoryReducersFactory(() => daffComposeReducers([
            combineReducers(daffCategoryReducers),
            ...inject(DAFF_CATEGORY_EXTRA_REDUCERS),
          ])),
          ...daffCategoryProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/category/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<{ [DAFF_CATEGORY_STORE_FEATURE_KEY]: DaffCategoryReducersState }>;

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
    store.dispatch(new DaffCategoryLoadFailure({
      code: 'code',
      message: 'already in state',
    }));

    let state: DaffCategoryReducersState;
    store.select(DAFF_CATEGORY_STORE_FEATURE_KEY).subscribe((s: DaffCategoryReducersState) => state = s);

    expect(state.category.daffErrors).toContain(extraError);
  });
});
