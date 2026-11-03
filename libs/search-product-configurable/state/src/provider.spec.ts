import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DAFF_PRODUCT_META_REDUCERS,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY } from '@daffodil/product-configurable/state';
import { DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY } from '@daffodil/search-product/state';

import { provideDaffSearchProductConfigurableState } from './provider';
import { daffSearchProductConfigurableEnsureChildrenMetaReducer } from './reducers/ensure-children.meta-reducer';

describe('@daffodil/search-product-configurable/state | provideDaffSearchProductConfigurableState', () => {
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffProductTestingDriverModule.forRoot()),
        provideDaffSearchProductConfigurableState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the search product, product, and configurable product feature states', () => {
    let state: any;
    store.subscribe((s) => state = s);

    expect(state[DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY]).toBeDefined();
    expect(state[DAFF_PRODUCT_STORE_FEATURE_KEY]).toBeDefined();
    expect(state[DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY]).toBeDefined();
  });

  it('should provide the ensure children meta reducer to the product feature', () => {
    expect(TestBed.inject(DAFF_PRODUCT_META_REDUCERS)).toContain(daffSearchProductConfigurableEnsureChildrenMetaReducer);
  });
});
