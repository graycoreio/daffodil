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
import { DaffProduct } from '@daffodil/product';
import {
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductPageLoadSuccess,
  DaffProductReducersState,
  daffProductProvideExtraReducers,
  daffProductReducers,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DAFF_PRODUCT_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_PRODUCT_REDUCERS,
  provideDaffProductReducersFactory,
} from './reducers.token';

/**
 * This test simulates a real application where the product feature's
 * reducers (registered the same way `DaffProductStateModule` registers
 * them) plus a consumer's extra reducers are provided on a lazy-loaded
 * route, rather than eagerly at the application root.
 *
 * It is a regression test for a bug where `DAFF_PRODUCT_REDUCERS` was
 * defined as a tree-shakable ("provided in root") `InjectionToken`. A token
 * defined that way always resolves its factory using the root environment
 * injector, even when it's actually requested from within a lazy-loaded
 * route's own child injector. As a result,
 * `inject(DAFF_PRODUCT_EXTRA_REDUCERS)` inside that factory could never see
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

const EXTRA_REDUCER_PRODUCT_ID = 'added-by-lazily-loaded-extra-reducer';

const lazyExtraReducer = (state: DaffProductReducersState) => ({
  ...state,
  product: {
    ...state.product,
    currentProductId: EXTRA_REDUCER_PRODUCT_ID,
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
          importProvidersFrom(StoreModule.forFeature(DAFF_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_REDUCERS)),
          provideDaffProductReducersFactory(() => daffComposeReducers([
            combineReducers(daffProductReducers),
            ...inject(DAFF_PRODUCT_EXTRA_REDUCERS),
          ])),
          ...daffProductProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/product/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<{ [DAFF_PRODUCT_STORE_FEATURE_KEY]: DaffProductReducersState }>;
  let productFactory: DaffProductFactory;
  let mockProduct: DaffProduct;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        importProvidersFrom(StoreModule.forRoot({})),
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffProductFactory);
    mockProduct = productFactory.create();

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/lazy', DaffLazyRouteTestComponent);
  });

  it('runs the extra reducer registered alongside the reducers on the lazy route', () => {
    store.dispatch(new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct],
    }));

    let state: DaffProductReducersState;
    store.select(DAFF_PRODUCT_STORE_FEATURE_KEY).subscribe((s: DaffProductReducersState) => state = s);

    expect(state.product.currentProductId).toEqual(EXTRA_REDUCER_PRODUCT_ID);
  });
});
