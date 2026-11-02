import { TestBed } from '@angular/core/testing';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DAFF_PRODUCT_META_REDUCERS } from '@daffodil/product/state';
import {
  DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY,
  daffRelatedProductsDedupeMetaReducer,
  DaffRelatedProductsReducersState,
} from '@daffodil/related-products/state';

import { provideDaffRelatedProductsState } from './provider';

describe('@daffodil/related-products/state | provideDaffRelatedProductsState', () => {
  let store: Store<{ [DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY]: DaffRelatedProductsReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffRelatedProductsState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the related products feature state', () => {
    let state: DaffRelatedProductsReducersState;
    store.select(DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.relatedProducts).toBeDefined();
  });

  it('should provide the dedupe meta reducer to the product feature', () => {
    expect(TestBed.inject(DAFF_PRODUCT_META_REDUCERS)).toContain(daffRelatedProductsDedupeMetaReducer);
  });
});
