import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  daffProductProvideExtraReducers,
  daffProductProvideMetaReducers,
  DaffProductReducersState,
} from '@daffodil/product/state';

import { provideDaffProductState } from './provider';

describe('@daffodil/product/state | provideDaffProductState', () => {
  let store: Store<{ [DAFF_PRODUCT_STORE_FEATURE_KEY]: DaffProductReducersState }>;
  let extraReducer: jasmine.Spy;
  let metaReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);
    metaReducer = jasmine.createSpy('metaReducer').and.callFake((reducer) => reducer);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffProductTestingDriverModule.forRoot()),
        provideDaffProductState(),
        ...daffProductProvideExtraReducers(extraReducer),
        ...daffProductProvideMetaReducers(metaReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the product feature state', () => {
    let state: DaffProductReducersState;
    store.select(DAFF_PRODUCT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.products).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });

  it('should apply the meta reducers', () => {
    expect(metaReducer).toHaveBeenCalledWith(jasmine.any(Function));
  });
});
