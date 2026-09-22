import { TestBed } from '@angular/core/testing';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DAFF_PRODUCT_META_REDUCERS } from '@daffodil/product/state';
import {
  DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY,
  daffUpsellProductsDedupeMetaReducer,
  DaffUpsellProductsReducersState,
} from '@daffodil/upsell-products/state';

import { provideDaffUpsellProductsState } from './provider';

describe('@daffodil/upsell-products/state | provideDaffUpsellProductsState', () => {
  let store: Store<{ [DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY]: DaffUpsellProductsReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffUpsellProductsState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the upsell products feature state', () => {
    let state: DaffUpsellProductsReducersState;
    store.select(DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.upsellProducts).toBeDefined();
  });

  it('should provide the dedupe meta reducer to the product feature', () => {
    expect(TestBed.inject(DAFF_PRODUCT_META_REDUCERS)).toContain(daffUpsellProductsDedupeMetaReducer);
  });
});
