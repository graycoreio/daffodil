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
  Store ,
  StoreModule,
} from '@ngrx/store';

import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import { DaffCompositeProduct } from '@daffodil/product-composite';
import {
  DaffCompositeProductReducersState,
  DaffCompositeProductStateModule,
  DaffCompositeProductStateRootSlice,
  DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY,
  daffProductCompositeProvideExtraReducers,
} from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';

/**
 * This test simulates a real application where the entire composite product
 * feature (`DaffCompositeProductStateModule` plus a consumer's extra reducers)
 * is registered on a lazy-loaded route, rather than eagerly at the application
 * root.
 *
 * It is a regression test for a bug where `DAFF_PRODUCT_COMPOSITE_REDUCERS`
 * was defined as a tree-shakable ("provided in root") `InjectionToken`. A
 * token defined that way always resolves its factory using the root
 * environment injector, even when it's actually requested from within a
 * lazy-loaded route's own child injector. As a result,
 * `inject(DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS)` inside that factory could
 * never see extra reducers that were only provided on the lazy route - they
 * would be silently dropped. Without the fix, the assertion below fails
 * because the id added by `lazyExtraReducer` never makes it into state.
 */

@Component({
  selector: 'daff-lazy-route-test',
  template: '',
  standalone: true,
})
class DaffLazyRouteTestComponent {}

const EXTRA_REDUCER_ATTRIBUTE_ID = 'added-by-lazily-loaded-extra-reducer';

const lazyExtraReducer = (state: DaffCompositeProductReducersState) => ({
  ...state,
  compositeProductOptions: {
    ...state.compositeProductOptions,
    ids: [
      ...(<string[]>state.compositeProductOptions.ids),
      EXTRA_REDUCER_ATTRIBUTE_ID,
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
          importProvidersFrom(DaffCompositeProductStateModule),
          ...daffProductCompositeProvideExtraReducers(lazyExtraReducer),
        ],
      },
    ]),
  },
];

describe('@daffodil/product-composite/state | Integration | extra reducers provided on a lazy-loaded route', () => {
  let store: Store<DaffCompositeProductStateRootSlice>;
  let productFactory: DaffCompositeProductFactory;
  let mockProduct: DaffCompositeProduct;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        importProvidersFrom(StoreModule.forRoot({})),
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffCompositeProductFactory);
    mockProduct = productFactory.create();

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/lazy', DaffLazyRouteTestComponent);
  });

  it('runs the extra reducer registered alongside the state module on the lazy route', () => {
    store.dispatch(new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct],
    }));

    let state: DaffCompositeProductReducersState;
    store.select(DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY).subscribe((s: DaffCompositeProductReducersState) => state = s);

    expect(state.compositeProductOptions.ids).toContain(EXTRA_REDUCER_ATTRIBUTE_ID);
  });
});
