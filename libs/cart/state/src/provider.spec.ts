import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DAFF_CART_STORE_FEATURE_KEY,
  daffCartProvideExtraReducers,
  daffCartProvideMetaReducers,
  DaffCartReducersState,
} from '@daffodil/cart/state';

import { provideDaffCartState } from './provider';

describe('@daffodil/cart/state | provideDaffCartState', () => {
  let store: Store<{ [DAFF_CART_STORE_FEATURE_KEY]: DaffCartReducersState }>;
  let extraReducer: jasmine.Spy;
  let metaReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);
    metaReducer = jasmine.createSpy('metaReducer').and.callFake((reducer) => reducer);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideRouter([]),
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffTestingCartDriverModule.forRoot()),
        provideDaffCartState(),
        ...daffCartProvideExtraReducers(extraReducer),
        ...daffCartProvideMetaReducers(metaReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the cart feature state', () => {
    let state: DaffCartReducersState;
    store.select(DAFF_CART_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.cart).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });

  it('should apply the meta reducers', () => {
    expect(metaReducer).toHaveBeenCalledWith(jasmine.any(Function));
  });
});
