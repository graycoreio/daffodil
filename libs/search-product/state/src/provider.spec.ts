import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import { DAFF_PRODUCT_STORE_FEATURE_KEY } from '@daffodil/product/state';
import { DaffSearchTestingDriverModule } from '@daffodil/search/driver/testing';
import { DAFF_SEARCH_STORE_FEATURE_KEY } from '@daffodil/search/state';
import {
  DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY,
  DaffSearchProductStateRootSlice,
} from '@daffodil/search-product/state';

import { DaffSearchProductCollectionEffects } from './effects/collection.effects';
import {
  provideDaffSearchProductPageState,
  provideDaffSearchProductState,
} from './provider';

describe('@daffodil/search-product/state | provideDaffSearchProductState', () => {
  let store: Store<DaffSearchProductStateRootSlice>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffProductTestingDriverModule.forRoot()),
        provideDaffSearchProductState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the search product, search, and product feature states', () => {
    let state: DaffSearchProductStateRootSlice;
    store.subscribe((s) => state = s);

    expect(state[DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY].productCollection).toBeDefined();
    expect(state[DAFF_SEARCH_STORE_FEATURE_KEY]).toBeDefined();
    expect(state[DAFF_PRODUCT_STORE_FEATURE_KEY]).toBeDefined();
  });
});

describe('@daffodil/search-product/state | provideDaffSearchProductPageState', () => {
  let store: Store<DaffSearchProductStateRootSlice>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(
          DaffProductTestingDriverModule.forRoot(),
          DaffSearchTestingDriverModule.forRoot(),
        ),
        provideDaffSearchProductPageState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the search product feature state', () => {
    let state: DaffSearchProductStateRootSlice;
    store.subscribe((s) => state = s);

    expect(state[DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY]).toBeDefined();
  });

  it('should provide the collection effects', () => {
    expect(TestBed.inject(DaffSearchProductCollectionEffects)).toBeTruthy();
  });
});
