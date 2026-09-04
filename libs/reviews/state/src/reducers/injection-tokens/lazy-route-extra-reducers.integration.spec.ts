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

import { daffComposeReducers } from '@daffodil/core/state';
import { DaffProductReviews } from '@daffodil/reviews';
import {
  DAFF_REVIEWS_STORE_FEATURE_KEY,
  DaffReviewsProductListSuccess,
  DaffReviewsReducersState,
  daffReviewsProvideExtraReducers,
  daffReviewsReducers,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DAFF_REVIEWS_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_REVIEWS_REDUCERS,
  provideDaffReviewsReducersFactory,
} from './reducers.token';

/**
 * This test simulates a real application where the reviews feature's
 * reducers (registered the same way `DaffReviewsStateModule` registers
 * them) plus a consumer's extra reducers are provided on a lazy-loaded
 * route, rather than eagerly at the application root.
 *
 * It is a regression test for a bug where `DAFF_REVIEWS_REDUCERS` was
 * defined as a tree-shakable ("provided in root") `InjectionToken`. A token
 * defined that way always resolves its factory using the root environment
 * injector, even when it's actually requested from within a lazy-loaded
 * route's own child injector. As a result,
 * `inject(DAFF_REVIEWS_EXTRA_REDUCERS)` inside that factory could never see
 * extra reducers that were only provided on the lazy route - they would be
 * silently dropped. Without the fix, the assertion below fails because the
 * id added by `lazyExtraReducer` never makes it into state.
 */

@Component({
  selector: 'daff-lazy-route-test',
  template: '',
  standalone: true,
})
class DaffLazyRouteTestComponent {}

const EXTRA_REDUCER_ID = 'added-by-lazily-loaded-extra-reducer';

const lazyExtraReducer = (state: DaffReviewsReducersState) => ({
  ...state,
  productReviewsCollection: {
    ...state.productReviewsCollection,
    ids: [
      ...state.productReviewsCollection.ids,
      EXTRA_REDUCER_ID,
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
          importProvidersFrom(StoreModule.forFeature(DAFF_REVIEWS_STORE_FEATURE_KEY, DAFF_REVIEWS_REDUCERS)),
          provideDaffReviewsReducersFactory(() => daffComposeReducers([
            combineReducers(daffReviewsReducers),
            ...inject(DAFF_REVIEWS_EXTRA_REDUCERS),
          ])),
          ...daffReviewsProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/reviews/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<{ [DAFF_REVIEWS_STORE_FEATURE_KEY]: DaffReviewsReducersState }>;
  let productReviewsFactory: DaffProductReviewsFactory;
  let mockProductReviews: DaffProductReviews;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        importProvidersFrom(StoreModule.forRoot({})),
      ],
    });

    store = TestBed.inject(Store);
    productReviewsFactory = TestBed.inject(DaffProductReviewsFactory);
    mockProductReviews = productReviewsFactory.create();

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/lazy', DaffLazyRouteTestComponent);
  });

  it('runs the extra reducer registered alongside the reducers on the lazy route', () => {
    store.dispatch(new DaffReviewsProductListSuccess(mockProductReviews));

    let state: DaffReviewsReducersState;
    store.select(DAFF_REVIEWS_STORE_FEATURE_KEY).subscribe((s: DaffReviewsReducersState) => state = s);

    expect(state.productReviewsCollection.ids).toContain(EXTRA_REDUCER_ID);
  });
});
