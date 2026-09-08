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
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';

import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY,
  DaffConfigurableProductReducersState,
  DaffConfigurableProductStateModule,
  DaffConfigurableProductStateRootSlice,
  daffProductConfigurableProvideExtraReducers,
} from '@daffodil/product-configurable/state';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

/**
 * This test simulates a real application where the entire configurable product
 * feature (`DaffConfigurableProductStateModule` plus a consumer's extra reducers)
 * is registered on a lazy-loaded route, rather than eagerly at the application root.
 *
 * It is a regression test for a bug where `DAFF_PRODUCT_CONFIGURABLE_REDUCERS` was
 * defined as a tree-shakable ("provided in root") `InjectionToken`. A token defined
 * that way always resolves its factory using the root environment injector, even when
 * it's actually requested from within a lazy-loaded route's own child injector. As a
 * result, `inject(DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS)` inside that factory could
 * never see extra reducers that were only provided on the lazy route - they would be
 * silently dropped. Without the fix, the assertion below fails because the id added by
 * `lazyExtraReducer` never makes it into state.
 */

@Component({
  selector: 'daff-lazy-route-test',
  template: '',
  standalone: true,
})
class DaffLazyRouteTestComponent {}

const EXTRA_REDUCER_ATTRIBUTE_ID = 'added-by-lazily-loaded-extra-reducer';

const lazyExtraReducer: ActionReducer<DaffConfigurableProductReducersState> = combineReducers<DaffConfigurableProductReducersState>({
  configurableProductAttributes: (state, action) => ({
    ...state,
    ids: [
      ...(<string[]>state.ids),
      EXTRA_REDUCER_ATTRIBUTE_ID,
    ],
  }),
});

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => Promise.resolve([
      {
        path: '',
        component: DaffLazyRouteTestComponent,
        providers: [
          importProvidersFrom(DaffConfigurableProductStateModule),
          ...daffProductConfigurableProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/product-configurable/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<DaffConfigurableProductStateRootSlice>;
  let productFactory: DaffConfigurableProductFactory;
  let mockProduct: DaffConfigurableProduct;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        importProvidersFrom(StoreModule.forRoot({})),
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffConfigurableProductFactory);
    mockProduct = productFactory.create();

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/lazy', DaffLazyRouteTestComponent);
  });

  it('runs the extra reducer registered alongside the state module on the lazy route', () => {
    store.dispatch(new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct],
    }));

    let state: DaffConfigurableProductReducersState;
    store.select(DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY).subscribe((s: DaffConfigurableProductReducersState) => state = s);

    expect(state.configurableProductAttributes.ids).toContain(EXTRA_REDUCER_ATTRIBUTE_ID);
  });
});
